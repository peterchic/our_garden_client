import React from 'react'
import SignUp from '../components/SignUp'
import LogInForm from '../components/LogInForm'
import bg from '../images/bg_images/bg_2.jpg'
import { Image } from 'semantic-ui-react'

export default function LogInSignUp (props){

  // render(){
    // console.log('LogInSignup props', props)
    return(
      <div className='landing-div'>
        {/* <Image className="landing-image" src={bg} /> */}
        <img className='landing-image' src={bg}/>
        <div id='log-in-signup'>

          <LogInForm handleLogin={props.handleLogin} handleSignUp={props.handleSignUp} />
          <div id="subline-bg">
            <div id='intro'>
              An online marketplace that connects you to your neighbors.
            </div>
            <div id="subline">
              Search, buy or sell produce from your own garden to all the people around you!
            </div>
          </div>
        </div>
      </div>
    )

}
