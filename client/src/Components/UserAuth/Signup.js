import React, { Component } from 'react';
import SignUpSide from './SignUpSide';
import { Redirect } from 'react-router-dom';
// import Snackbar from '../Snackbar';
import events from '../../apis/events';

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
        // var json = JSON.stringify(obj);
        console.log(obj);
        events.post("/putUser",obj)
            .then(json => {
                console.log(json.data);
                if (json.data.success) {
                    //TODO Success snackbar and redirect to signin Page
                    localStorage.setItem("registrationSuccess","true");
                    this.setState({ showSnackbar: json.data.success });
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