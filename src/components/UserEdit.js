import React, { Component } from 'react'
import { Grid, Segment, Input, Button, Header, Form } from 'semantic-ui-react'
// import { Switch, Route, Link, withRouter } from 'react-router-dom'

export default class UserEdit extends Component{
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
    this.props.editUser(
      this.props.current_user.id,
      this.state.name,
      this.state.username,
      this.state.password,
      this.state.bio,
      this.state.picture
    )
  }

  render(){
    if (!this.props.current_user){
      return null
    }
    console.log('name', this.state.name);
    return (
      <Grid centered verticalAlign="middle">
        <Grid.Column textAlign="center" width={7}>
          <Header id="header">
            {/* <Image src={logo} /> */}
            Edit Your Account!
          </Header>
          <Form size="large" onSubmit={ e => this.handleSubmit(e)}>
            <Segment stacked>
              <Form.Field>
                <Input fluid icon='user' iconPosition='left' placeholder='Change Name' value={this.state.name} onChange={ e => this.handleChange('name', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='user' iconPosition='left' placeholder='Change Username' type="text" value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='lock' iconPosition='left' placeholder='Change Password' type="password" value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='comment outline' iconPosition='left' placeholder='Change Bio' type="textarea" value={this.state.bio} onChange={ e => this.handleChange('bio', e.target.value)} />
              </Form.Field>
              <Form.Field>
                <Input fluid icon='image' iconPosition='left' placeholder='Change image (url link only please)' type="textarea" value={this.state.picture} onChange={ e => this.handleChange('picture', e.target.value)} />
              </Form.Field>
              <Button fluid color="olive" size="large">Submit Changes</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }

}
