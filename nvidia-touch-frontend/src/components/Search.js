import React, { Component } from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import axios from "axios";
import logo from "../static/logo.jpeg"

export const API_URL = "http://127.0.0.1:8000/api";

export class Search extends Component {
    state = {
        searchResults: []
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
                        <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="button-addon2"/>
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
                        {this.state.searchResults.map((name) => <div key={name}>{name}</div>)}
                    </Col>
                </Row>
            </div>
        );
    }

    getResults = () => {
        axios.get(API_URL + "/employees").then(res => {
            var result = res.data.results.map((user) => user.name);
            this.setState({searchResults: result});
        })
        // axios.get(API_URL + "/employees").then(res => this.setState({ searchResults: res.data }));
    }
  }
  