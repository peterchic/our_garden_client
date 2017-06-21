import React from 'react'
import SignUp from '../components/SignUp'
import LogInForm from '../components/LogInForm'

export default function LogInSignUp (props){

  // render(){
    // console.log('LogInSignup props', props)
    return(
      <div>
        {/* <SignUp handleSignUp={props.handleSignUp}/> */}
        <LogInForm handleLogin={props.handleLogin} handleSignUp={props.handleSignUp} />
      </div>
    )
  // }
}
