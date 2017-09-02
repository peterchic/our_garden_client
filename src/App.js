import React from 'react';
import isAuthenticated from './components/hocs/isAuthenticated'
import OurGardenContainer from './containers/OurGardenContainer'
// import LogInSignUp from './containers/LogInSignUp'
// import LogInForm from './components/LogInForm'
// import Account from './components/Account'
// import SignUp from './components/SignUp'
// import NavBar from './components/NavBar'
import './App.css';

const AuthedOurGardenContainer = isAuthenticated(OurGardenContainer)

class App extends React.Component {


    render(){
      // if(localStorage.getItem('token')){
        return (
        <div>
          <div className = "container-fluid">
            <OurGardenContainer />
          </div>
        </div>
        )
      }
    // }
  }
{/* <AuthedOurGardenContainer /> */}


export default App
