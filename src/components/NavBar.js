import React from 'react'
import LogInSignUp from '../containers/LogInSignUp'

import { Link } from 'react-router-dom'

function logout(){
  localStorage.clear()
}


export default function NavBar(props){
  // console.log('local', localStorage);
  const colors = {
    black: 'navbar-inverse',
    white: 'navbar-default'
  }

  // console.log('logout', props.logout);

  if(localStorage.getItem('token')){
    return (
      <nav className={`navbar ${colors[props.color]} bg-inverse`}>
        <div className='navbar-header'>
          <a className='navbar-brand'>
            { props.title }
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/farmers">Find A Garden</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/" onClick={logout}>Log Out</Link></li>
          </ul>
        </div>
      </nav>
    )
  } else {
    return (
      <div>
        <nav className={`navbar ${colors[props.color]} bg-inverse`}>
          <div className='navbar-header'>
            <a className='navbar-brand'>
              { props.title }
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/signup">Log In or Sign Up!</Link></li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
