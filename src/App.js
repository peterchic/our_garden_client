import React from 'react';
import LogInForm from './components/LogInForm'
import SignUp from './components/SignUp'
import OurGardenContainer from './containers/OurGardenContainer'
import { logIn, signUp, decodeToken } from './api/RailsAPI'
import { Switch, Route, withRouter } from 'react-router-dom'
import isAuthenticated from './components/hocs/isAuthenticated'
import bg from './images/bg_images/bg_2.jpg'


import './App.css';

const AuthedOurGardenContainer = isAuthenticated(OurGardenContainer)

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      user: ''
    }
  }

  handleLogIn(params){
    logIn(params)
    .then( res => {
      console.log('back home', params);
      if (res.error) {
        return alert(`Sorry, ${res.error}! Try again.`)
      }
      localStorage.setItem("token", res.token)
      this.setState({
        user: res.user
      })
      this.props.history.push('/farmers')
    }).catch( e => console.log('error from login', e.response) )
  }

  handleSignUp(params){
    signUp(params)
    .then( res => {
      if (res.error) {
        return alert(`Sorry, ${res.error}! Try again.`)
      }
      localStorage.setItem('token', res.token)
      this.setState({
          user: res.user
        })
      this.props.history.push('/farmers')
    }).catch( e => alert(e) )
  }

  componentDidMount(){
    if (localStorage.token && this.state.user_id === '') {
     decodeToken({token: localStorage.token})
     .then( data => {
       this.setState({
         user: data
       })
     })
    }
  }

  render(){
    return (
      <Switch>
        <Route exact path="/login" render={ () =>
          <div className='landing-div'>
            <img alt="fresh produce and bread background" className='landing-image' src={bg}/>
            <div id='log-in-signup'>
              <LogInForm handleLogIn={this.handleLogIn}/>
              <SignUp handleSignUp={this.handleSignUp}/>
              <div id="subline-bg">
                <div id='intro'>
                  <span>An online marketplace<br/>
                  that connects you to your neighbors.</span>
                </div>
              </div>
            </div>
          </div>
        }
      />
      <div className= "container-fluid">
        <Route path ='/' render={() => <AuthedOurGardenContainer user={this.state.current_user}/>} />
      </div>
      </Switch>
    )
  }
}

export default withRouter(App)
