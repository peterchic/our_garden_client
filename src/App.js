import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import OurGardenContainer from './containers/OurGardenContainer'
import LogInForm from './components/LogInForm'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import LogInSignUp from './containers/LogInSignUp'
import './App.css';

export default class App extends React.Component {



  render(){
    if(localStorage.getItem('token')){
      return (
      <div>
        <div className = "container-fluid">
          <NavBar title="OurGarden" color="white"/>
          <Switch>
            <Route path='/farmers' component={OurGardenContainer} />
            <Route path="/about" render={() => <h1>This is an app about life!</h1>}/>
            <Route exact path='/logout'/>
          </Switch>
        </div>
      </div>
    )
  } else {
      return (
        <div>
          <NavBar title="OurGarden" color="white" />
          <LogInSignUp />
        </div>
      )
    }
  }
}
