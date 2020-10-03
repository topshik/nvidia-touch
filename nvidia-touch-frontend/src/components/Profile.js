import React, { Component } from 'react'

export class Profile extends Component {
    state = {
        users: ["stas", "tamer"]
    };

    render () {
        return (
            <div>
                <h2>Profile</h2>
                {this.state.users.map((user) => <div>{user}</div>)}
                <button onClick={this.addUser}>
                Add user
                </button>
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
  