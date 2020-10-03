import React, { Component } from 'react'
import logo from "../static/logo.jpeg";

export class Profile extends Component {
    state = {
        users: ["stas", "tamer"]
    };

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-3">
                        <img className="row" src="http://nvidia-touch.com:443/photos/img_OPnJyuH.png" alt="Logo" />
                        <div className="row mt-4 h4 font-weight-bold"><b>Michael Vasilkovsky</b></div>
                        <div className="row">@waytobehigh</div>
                        <div className="row text-left mt-3">
                            R&D Lead @neuro-inc. Graduated from MIPT, @yandexdataschool. Masters student at Skoltech.
                        </div>
                        <button className="row btn-primary btn-block pull-left mt-3"> Edit </button>
                        <div className="row text-left mt-3 "> <b>@neuro-inc</b> </div>
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
                                        @Michael Vasilkovsky
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
                                        @waytobehigh
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
                            <div className="row">
                                <div className="col card search-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Tensorflow</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Project</h6>
                                        <p className="card-text">Lores ipsum...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col card search-card">
                                    <div className="card-body">
                                        <h5 className="card-title">Tensorflow</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Project</h6>
                                        <p className="card-text">Lores ipsum...</p>
                                    </div>
                                </div>
                            </div>
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

    addUser = () => {
        var users = this.state.users;
        users.push("newuser");
        this.state.users = users;
        this.render();
        //this.setState({users: users})
    }
  }
  