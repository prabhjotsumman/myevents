import React from 'react';
import './App.css';
import Signin from './Components/UserAuth/Signin';
import Signup from './Components/UserAuth/Signup';
import HomePage from './Components/HomePage';
import EventPage from './Components/EventPage';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/event/:eventID" component={EventPage} />
    </Router>
  );
}

export default App;
