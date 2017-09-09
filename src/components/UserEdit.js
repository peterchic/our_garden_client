import React, { Component } from 'react'
import { Grid, Segment, Input, Button, Header, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class UserEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: this.props.current_user.name,
      username: this.props.current_user.username,
      password: this.props.current_user.password,
      bio: this.props.current_user.bio,
      picture: this.props.current_user.picture
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

  handleCancel(e){
    e.preventDefault()
    this.props.history.push(`/account`)
  }

  render(){
    if (!this.props.current_user){
      return null
    }
    return (
      <Grid centered verticalAlign="middle">
        <Grid.Column textAlign="center" width={7}>
          <Header>
            {/* <Image src={logo} /> */}
            <h2>Edit Your Account!</h2>
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
              <Button fluid color="grey" size="large" id="account-button" onClick={this.handleCancel.bind(this)}>Cancel</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(UserEdit)
