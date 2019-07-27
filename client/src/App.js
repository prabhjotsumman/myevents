import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Signin from './UserAuth/Signin';
import Signup from './UserAuth/Signup';
import HomePage from './Components/HomePage';
import EventPage from './Components/EventPage';
import Dashboard from './Dashboard/Dashboard';

// const loggedin = JSON.parse(localStorage.getItem('currentActiveUserProfile')).loggedin;

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/event/:eventID" component={EventPage} />
    </Router>
  );
}

export default App;
