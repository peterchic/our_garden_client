import React from 'react'
import LogInForm from '../components/LogInForm'
import bg from '../images/bg_images/bg_2.jpg'

export default function LogInSignUp (props){

    return(
      <div className='landing-div'>
        <img alt="fresh produce and bread background" className='landing-image' src={bg}/>
        <div id='log-in-signup'>
          <LogInForm handleLogin={props.handleLogin} />
          <div id="subline-bg">
            <div id='intro'>
              <span>An online marketplace<br/>
              that connects you to your neighbors.</span>
            </div>
          </div>
        </div>
      </div>
    )
}
