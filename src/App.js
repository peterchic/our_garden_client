import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import OurGardenContainer from './containers/OurGardenContainer'
import LogInForm from './components/LogInForm'
import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import './App.css';

// import logo from './logo.svg';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      signedIn: false
    }
  }

  handleLogin(params){
    fetch("http://localhost:3000/api/v1/sign_in", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  }).then( res => res.json() )
  .then(resp=> {
    console.log(resp);
    localStorage.setItem("user", resp.user)
    localStorage.setItem("token", resp.token)
    // localStorage.setItem("username", resp.username)
  })

}

  componentWillMount(){
    if(localStorage.token){
      this.setState({
        signedIn: true
      })
    }
  }

  render(){
    if(this.state.signedIn){
      return (
      <div>
        <div className = "container-fluid">
          <NavBar title="OurGarden" color="black" />
          <Switch>
            <Route path='/farmers' component={OurGardenContainer} />
            <Route path="/login" render={() => <LogInForm handleLogin={this.handleLogin}/> }/>
            <Route path="/about" render={() => <h1>This is an app about life!</h1>}/>
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    )
  } else {
      return <LogInForm handleLogin={this.handleLogin}/>
    }
  }
}
