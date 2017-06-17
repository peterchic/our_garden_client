import React from 'react'
import SignUp from '../components/SignUp'
import LogInForm from '../components/LogInForm'

export default class LogInSignUp extends React.Component{



  render(){
    // console.log('LogInSignup props', this.props)
    return(
      <div>
        <SignUp />
        <LogInForm handleLogin={this.props.handleLogin} />
      </div>
    )
  }
}

//what?

//with router
