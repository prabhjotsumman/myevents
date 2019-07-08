import React, { Component } from 'react';
// import PeaUserCard from '../lib/PeaUserCard';
import DashboardLayout from './DashboardLayout';
import { Redirect } from 'react-router-dom';

export default class AllEvents extends Component {
    constructor() {
        super();
        this.state = {
          loggedin: true,
          Profile: {}
        }
    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
        if(currentUser){
          const loggedin = currentUser.loggedin;
          this.setState({ profile: currentUser,loggedin:loggedin });
        }
        console.log(currentUser);
    }

    render() {
        return (
            <>
              {
                (this.state.loggedin) ? <DashboardLayout /> : <Redirect to="signin" />
              }
            </>
        )
    }
}