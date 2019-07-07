import React, { Component } from 'react';
import SignUpSide from './SignUpSide';
import { Redirect } from 'react-router-dom';

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
        fetch('http://localhost:3001/putUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: json
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);
                if (json.success) {
                    //TODO save state and redirect to dashboard
                    this.setState({ success: json.success });
                }
            })
    }

    render() {
        return (
            (this.state.success) ?
                <Redirect to="/Dashboard" /> :
                <SignUpSide onRegister={this.handleSubmit} />
        )
    }
}