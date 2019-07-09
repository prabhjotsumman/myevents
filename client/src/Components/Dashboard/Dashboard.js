import React, { Component } from 'react';
// import PeaUserCard from '../lib/PeaUserCard';
import DashboardLayout from './DashboardLayout';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          loggedin: true,
          Profile: '',
          organisationName: ''
        }
    }
    componentDidMount() {
        let currentUser = JSON.parse(localStorage.getItem('currentActiveUserProfile'));
        // if(currentUser){
          // const loggedin = currentUser.loggedin; 
          const organisationName = currentUser.organisationName;
          // debugger 
          this.setState({ Profile: currentUser, organisationName});
        // }
        // console.log("In Dashboard :", currentUser);
        // console.log("In Dashboard : ", this.state);
    }

    render() {
        return (
            <>
              {
                (this.state.loggedin) ? <DashboardLayout company={this.state.organisationName}/> : <Redirect to="signin" />
              }
            </>
        )
    }
}