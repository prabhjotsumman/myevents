import React from 'react';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import HomePage from './Components/HomePage';

import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/Dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
