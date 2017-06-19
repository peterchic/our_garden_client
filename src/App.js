// import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';

import OurGardenContainer from './containers/OurGardenContainer'
// import LogInSignUp from './containers/LogInSignUp'
// import LogInForm from './components/LogInForm'
// import Account from './components/Account'
// import SignUp from './components/SignUp'
// import NavBar from './components/NavBar'
import './App.css';
import isAuthenticated from './components/hocs/isAuthenticated'

const AuthedOurGardenContainer = isAuthenticated(OurGardenContainer)

export default class App extends React.Component {



  render(){
    // if(localStorage.getItem('token')){
      return (
      <div>
        <div className = "container-fluid">
          {/* <NavBar title="OurGarden" color="white"/> */}
          <OurGardenContainer />

        </div>
      </div>
      )
    }
  // }
}
