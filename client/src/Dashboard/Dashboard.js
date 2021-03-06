import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';

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
    const organisationName = currentUser.organisationName;
    this.setState({ Profile: currentUser, organisationName });
  }

  render() {
    return (
      <>
        {
          (this.state.loggedin) ? <DashboardLayout company={this.state.organisationName} /> : <Redirect to="signin" />
        }
      </>
    )
  }
}