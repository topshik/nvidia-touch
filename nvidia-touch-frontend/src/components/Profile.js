import axios from 'axios';
import React, { Component } from 'react';
import defaultProfilePhoto from "../static/profile.jpg";

export class Profile extends Component {
    state = {
        employee: {
            photo: defaultProfilePhoto,
            name: "Your Name",
            email: "yourlogin@nvidia.com",
            projects: [],
            projects_data: [],
        }
    };

    componentDidMount = () => {
        if (this.props.match) {
            var id = this.props.match.params.id
        } else {
            var id = this.props.my_id
        }
        this.getEmployee(id).then(res => {
            var employee = res.data;
            employee.projects_data = [];
            return this.setState((prevState) => ({...prevState, employee}));
        }).then(() => {
            console.log("KEK!")
            return Promise.all(
                this.state.employee.projects.map((project_url) => this.getProject(project_url))
            )
        }).then(projects_data => {
            this.setState(prevState => {
                var { employee } = prevState;
                employee = {...employee, projects_data: projects_data};
                return {...prevState, employee}
            });
        });
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        <img className="row" src={this.state.employee.photo} alt="Logo" />
                        <div className="row mt-4 h4 font-weight-bold"><b>{this.state.employee.name}</b></div>
                        <div className="row">@{this.getLogin()}</div>
                        <div className="row text-left mt-3">
                            R&D Lead @neuro-inc. Graduated from MIPT, @yandexdataschool. Masters student at Skoltech.
                        </div>
                        <button className="row btn-primary btn-block pull-left mt-3"> Edit </button>
                        <div className="row text-left mt-3 "> <b>@nvidia</b> </div>
                        <div className="row text-left"> Russia, Moscow </div>
                        <div className="row text-left mt-2">
                            <div className="col-md-1">
                                <div className="row h-75">
                                    <img src="https://a.slack-edge.com/80588/marketing/img/meta/favicon-32.png"></img>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <a href="https://nvidia.slack.com/team/U1H63D8SZ">
                                        @{this.state.employee.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row text-left">
                            <div className="col-md-1">
                                <div className="row h-75">
                                    <img src="https://github.githubassets.com/favicons/favicon-dark.png"></img>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <a href="https://github.com/waytobehigh">
                                        @{this.getLogin()}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <hr className="row" style={{
                            color: '#FFFFFF',
                            backgroundColor: '#FFFFFF',
                            height: .5,
                            borderColor : '#FFFFFF'
                        }}/>
                        <div className="row h5 font-weight-bold">Tags</div>
                    </div>
                    <div className="col-md-6 ml-3">
                            {/* Projects */}
                            {this.state.employee.projects_data.map((project) => <ProjectCard key={project.link} item={project}/>)}
                        <div className="row mt-4">
                            <iframe
                                src="https://calendar.google.com/calendar/embed?src=ru.russian%23holiday%40group.v.calendar.google.com&ctz=Europe%2FMoscow"
                                style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    getEmployee = (id) => {
        return axios.get(this.props.api_url + "/employees/" + id)
    }

    getLogin = () => {
        return this.state.employee.email.split("@")[0]
    }

    getProject = (url) => {
        return axios.get(url).then((res) => res.data)
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