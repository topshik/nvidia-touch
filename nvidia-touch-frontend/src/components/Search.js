import React, { Component } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import axios from "axios";
import logo from "../static/logo.jpeg"

export const API_URL = "http://127.0.0.1:8000/api";

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
                <Row>
                    <Col>
                        {this.getResults()}
                    </Col>
                </Row>
            </div>
        );
    }

    handleSearchTextChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    getResults = () => {
        if (this.state.searchText === "") return <div></div>
        var results = this.state.projects.concat(this.state.employees);
        results = results.filter((item) => this.filterPredicate(this.state.searchText, item))
        return results.map((item) => {
            return <div style={{color: "white"}}>{item.name}</div>
        })
    }

    filterPredicate = (query, item) => {
        query = query.toLowerCase();
        var fields = ["name", "description", "email"];
        fields = fields.map((field) => field in item && item[field].toLowerCase().includes(query))
        return fields.some((a) => a)
    }
  }
  