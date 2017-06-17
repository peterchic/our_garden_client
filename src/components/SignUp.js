import React from 'react'
import axios from 'axios'
import {withRouter} from "react-router-dom";

class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      username: '',
      password: '',
      bio: ''
    }
  }

  handleSignUp(){
    axios.post('http://localhost:3000/api/v1/users', {
      user: {
        name: this.state.name,
        username: this.state.username,
        password: this.state.password,
        bio: this.state.bio
      }
    }).then(res => { console.log('Sign Up Response: ', res)
      localStorage.setItem("token", res.data.token)
    })
    // , this.props.history.push('/farmers')
    .catch((error) => console.log('error from handleSignUp', error.response) )
    this.props.history.push('/farmers')
  }

  handleChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.handleSignUp()
  }

  render(){
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e)}>

          <label>Name</label>
          <input type='text' value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)}/>

          <label>Username</label>
          <input type='text' value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)}/>

          <label>Password</label>
          <input type='password' value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)}/>

          <label>Bio</label>
          <input type='text' value={this.state.bio} onChange={ e => this.handleChange('bio', e.target.value)}/>

          <input type='submit' value='Sign Up'/>
        </form>
      </div>
    )

  }
}

// SignUp.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };

export default withRouter(SignUp)
