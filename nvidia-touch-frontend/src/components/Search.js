import React, { Component } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import axios from "axios";
import logo from "../static/logo.jpeg"

export const API_URL = "http://nvidia-touch.com:443/api";
// export const API_URL = "http://192.168.1.7:8000/api";

export class Search extends Component {
    state = {
        searchText: "",
        projects: [],
        employees: [],
    }

    componentDidMount = () => {
        axios.get(API_URL + "/employees").then(res => {
            this.setState((prevState) => ({...prevState, employees: res.data.results}));
        })
        axios.get(API_URL + "/projects").then(res => {
            this.setState((prevState) => ({...prevState, projects: res.data.results}));
        })
    }

    render () {
        return (
            <div className="container nvidia-search-logo">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <div className="input-group mb-3">
                        <input type="text" className="form-control" 
                            placeholder="" aria-label="Recipient's username" 
                            aria-describedby="button-addon2" value={this.state.searchText} 
                            onChange={this.handleSearchTextChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="button-addon2"
                            onClick={this.getResults}
                            >Search</button>
                        </div>
                    </div>

                    </div>
                </div>
                {/* Result */}
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        {this.getResults()}
                    </div>
                </div>
            </div>
        );
    }

    handleSearchTextChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    getResults = () => {
        if (this.state.searchText === "") return <div></div>
        var { projects, employees} = this.state;
        projects = projects.filter((item) => this.filterPredicate(this.state.searchText, item))
        employees = employees.filter((item) => this.filterPredicate(this.state.searchText, item))
        projects = projects.map((project) => <ProjectCard item={project}/>)
        employees = employees.map((employee) => <EmployeeCard item={employee}/>)
        return employees.concat(projects)
    }

    filterPredicate = (query, item) => {
        query = query.toLowerCase();
        var fields = ["name", "description", "email"];
        fields = fields.map((field) => field in item && item[field].toLowerCase().includes(query))
        return fields.some((a) => a)
    }
  }
  
  class ProjectCard extends Component {
    render = () => {
        return (
            <div className="row">
                <div className="col card search-card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Project</h6>
                    <p className="card-text">{this.props.item.description}</p>
                </div>
                </div>
            </div>
        )
    }
}

class EmployeeCard extends Component {
    render = () => {
        return (
            <div className="row">
                <div className="col card search-card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="card-title">{this.props.item.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Employee</h6>
                            <p className="card-text">{this.props.item.email}</p>
                        </div>
                        <div className="col-md-4 text-right">
                            <img className="search-card-photo" src={this.props.item.photo}></img>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}