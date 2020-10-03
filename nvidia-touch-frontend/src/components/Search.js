import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import axios from "axios";
import logo from "../static/logo.jpeg"

export class Search extends Component {
    state = {
        searchText: "",
        projects: [],
        employees: [],
    }

    componentDidMount = () => {
        axios.get(this.props.api_url + "/employees").then(res => {
            this.setState((prevState) => ({...prevState, employees: res.data.results}));
        })
        axios.get(this.props.api_url + "/projects").then(res => {
            this.setState((prevState) => ({...prevState, projects: res.data.results}));
        })
    }

    render () {
        if (this.state.redirect) {
            return <Redirect push to={this.state.redirect} />;
        }
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
        projects = projects.map((project) => <ProjectCard key={project.link} item={project}/>).slice(0, 20)
        employees = employees.map((employee) => <EmployeeCard key={employee.url} item={employee} goToPage={this.goToPage}/>).slice(0, 20)
        return employees.concat(projects)
    }

    filterPredicate = (query, item) => {
        query = query.toLowerCase();
        var fields = ["name", "description", "email"];
        fields = fields.map((field) => field in item && item[field].toLowerCase().includes(query))
        return fields.some((a) => a)
    }

    goToPage = (url) => {
        this.setState({redirect: url})
    }
  }
  
  class ProjectCard extends Component {
    render = () => {
        return (
            <div className="row">
                <div className="col card search-card" onClick={() => this.goToPage("https://www.notion.so/Copy-of-TensorFlow-90332709b63c40f4b46db922aec27523")}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Project</h6>
                    <p className="card-text">{this.props.item.description}</p>
                </div>
                </div>
            </div>
        )
    }
    
    goToPage = (url) => {
        var win = window.open(url, '_blank');
        win.focus();
    }
}

class EmployeeCard extends Component {
    render = () => {
        return (
            <div className="row" key={this.getId()}>
                <div className="col card search-card" 
                onClick={() =>  this.props.goToPage("/profile/" + this.getId())}>
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

    getId = () => {
        var split = this.props.item.url.split("/");
        var id = split[split.length - 2];
        return id
    }
}