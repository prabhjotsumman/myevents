import React, { Component } from 'react';
import SignUpSide from './SignUpSide';
import { Redirect } from 'react-router-dom';
// import Snackbar from '../Snackbar';

export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            success: false,
            status: null,
            error: null,
            loggedin: false,
            showSnackbar: ""
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
                    //TODO Success snackbar and redirect to signin Page
                    localStorage.setItem("registrationSuccess","true");
                    this.setState({ showSnackbar: json.success });
                    this.setState({ success: true });
                }
                else {
                    this.setState({ showSnackbar: "error" });
                }
            })
    }

    render() {
        return (
            (this.state.success) ?
                <Redirect to="/signin" />
                :
                <SignUpSide onRegister={this.handleSubmit} />
        )
    }
}