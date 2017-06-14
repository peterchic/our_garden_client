import React from 'react'
import SignUp from '../components/SignUp'
import LogInForm from '../components/LogInForm'

export default class LogInSignUp extends React.Component{

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
    localStorage.setItem("username", resp.user)
    localStorage.setItem("token", resp.token)
    // localStorage.setItem("username", resp.username)
  })
}

  render(){
    return(
      <div>
        <SignUp />
        <LogInForm handleLogin={this.handleLogin.bind(this)} />
      </div>
    )
  }
}

//with router
