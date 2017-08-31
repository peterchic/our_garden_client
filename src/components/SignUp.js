import React from 'react'
import axios from 'axios'
import {withRouter, Link } from "react-router-dom";
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'
import logo from '../images/plant.svg'



class SignUp extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '',
      username: '',
      password: '',
      bio: '',
      picture: ''
    }
  }

  handleChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleSignUp(
      this.state.name,
      this.state.username,
      this.state.password,
      this.state.bio,
      this.state.picture
    )
  }

  render(){
    return (
      <Grid centered verticalAlign="middle">
        <Grid.Column textAlign="center" width={7}>
          <Header id="header">
            <Image src={logo} />
            Create Your Account!
          </Header>
          <Form size="large" onSubmit={ e => this.handleSubmit(e)}>
            <Segment stacked>
              <Form.Field>
                <Input fluid icon='user' iconPosition='left' placeholder='Name' value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='user' iconPosition='left' placeholder='Username' type="text" value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='lock' iconPosition='left' placeholder='Password' type="password" value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='comment outline' iconPosition='left' placeholder='Bio' type="textarea" value={this.state.bio} onChange={ e => this.handleChange('bio', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='image' iconPosition='left' placeholder='Upload an image -url link- only please' type="textarea" value={this.state.picture} onChange={ e => this.handleChange('picture', e.target.value)} />
              </Form.Field>
              <Button fluid color="olive" size="large">Sign Up</Button>
            </Segment>
            <Message>
              Back to <Link to={'/login'}> Login </Link>
            </Message>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}


export default withRouter(SignUp)
