import React, { Component } from 'react'
import projectHuntPage from "../static/projecthunt.jpeg"

export class ProjectHunt extends Component {
    render () {
        return (
            <div className="container-fluid">
                <img src={projectHuntPage}/>
            </div>
        )
    }
  }
