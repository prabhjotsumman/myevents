import React, { Component } from 'react';
import SignInSide from './Components/SignInSide';

export default class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            success: false,
            status: null,
            error: null,
            loggedin: false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        var obj = {};
        formData.forEach((value, key) => { obj[key] = value });
        var json = JSON.stringify(obj);
        console.log(obj);
        fetch('http://localhost:3001/getUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: json
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    this.setState({ error: data.error })
                }
                this.setState({ success: data.success, status: data.status, loggedin: data.loggedin })
            }
            );
    }

    render() {
        return (
            (this.state.loggedin) ? <div><h1> Hi there!</h1></div> : <SignInSide onRegister={this.handleSubmit} />
        )
    }
}