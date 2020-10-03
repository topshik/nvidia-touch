import axios from "axios";
import React, { Component } from 'react'
import defaultProfilePhoto from "../static/profile.jpg"

export class RandomCoffee extends Component {
    state = {
      coffeeOn: false,
      myEmployee: null,
      matchEmployee: null,
    }

    componentDidMount = () => {
      this.getMyself();
    }

    render = () => {
      return (
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-6 text-center">
              <div className="row justify-content-md-center">
                <div className="col-md-8">
                  <img className="coffee-profile-img image-responsive" 
                  src={this.state.myEmployee ? this.state.myEmployee.photo : defaultProfilePhoto}/>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <h4>You</h4>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <div className="row">
                    <div className="col-md-6 text-left">Exploration</div> 
                    <div className="col-md-6 text-right">Exploitation</div>
                  </div>
                  <input type="range" className="custom-range mt-2" step="0.2" min="0" max="5" id="exploration-range"/>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  Random coffee:
                  <div className="btn-group btn-block btn-group-toggle mt-3" data-toggle="buttons">
                    <label className={"btn btn-primary " + (this.state.coffeeOn ? "active" : "")}
                    onClick={() => {this.updateCoffee(true)}}>
                      <input type="radio" name="options" id="option1" autoComplete="off"/> On
                    </label>
                    <label className={"btn btn-primary " + (!this.state.coffeeOn ? "active" : "")}
                    onClick={() => {this.updateCoffee(false)}}>
                      <input type="radio" name="options" id="option3" autoComplete="off"/> Off
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="row justify-content-md-center">
                <div className="col-md-8">
                  <img className="coffee-profile-img image-responsive" 
                  src={this.state.matchEmployee ? this.state.matchEmployee.photo : defaultProfilePhoto}/>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                <h4>{this.state.matchEmployee ? this.state.matchEmployee.name : "Your future match"}</h4>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                <h4>{this.state.matchEmployee ? 
                this.state.matchEmployee.name : 
                ""}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    getEmployee = (id) => {
      return axios.get(this.props.api_url + "/employees/" + id)
    }

    getMyself = () => {
      this.getEmployee(this.props.my_id).then(res => {
        this.setState((prevState) => ({...prevState, myEmployee: res.data}));
      })
    }

    updateCoffee = (value) => {
      this.setState({coffeeOn: value})
    }
  }
  