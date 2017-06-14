import React from 'react'

export default class LoginForm extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    // console.log('in constructor: ', this.props.handleLogin);
}

handleChange(prop, value){
  this.setState({
    [prop]: value
  })
}

handleSubmit(e){
  e.preventDefault()
  this.props.handleLogin(this.state)
}

  render(){
    return(
      <form onSubmit={ e => this.handleSubmit(e)}>
        <label>Username</label>
        <input type='text' value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)}/>
        <label>Password</label>
        <input type='password' value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)}/>
        <input type='submit' value='Log In'/>
      </form>
    )

  }
}
