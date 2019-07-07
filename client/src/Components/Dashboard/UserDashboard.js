import React, { Component } from 'react';

export default class AllEvents extends Component {
    constructor() {
        super();
        this.state = {
            Profile: {}
        }
    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
        // this.setState({ profile: currentUser });
        console.log(currentUser);
    }

    render() {
        return (
            <div>
                <h1>User Dashboard</h1>
            </div>
        )
    }
}

