// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
// import AuthService from './Services/AuthService'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
//   const isLoggedIn = AuthService.isLoggedIn()
    let loggedin = JSON.parse(localStorage.getItem('currentActiveUserProfile')).loggedin;

  return (
    <Route
      {...rest}
      render={props =>
        loggedin ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute