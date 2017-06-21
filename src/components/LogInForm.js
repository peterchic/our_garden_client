import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'
import SignUp from './SignUp'
import logo from '../images/plant.svg'


export default class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
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
    // console.log('LoginForm props', this.props)
    return(
    <Switch>
    <Route
    path="/signup"
    render={ () => <SignUp handleSignUp={this.props.handleSignUp}/>}
    />

    <Grid centered verticalAlign="middle">
      <Grid.Column textAlign="center" width={7}>
        <Header as='h2' color='olive'>
          <Image src={logo}/>
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={ e => this.handleSubmit(e)}>
          <Segment stacked>
            <Form.Field>
              <Input fluid icon='user' iconPosition='left' placeholder='Username' value={this.state.username} onChange={ e => this.handleChange('username', e.target.value)} />
            </Form.Field>
            <Form.Field>
              <Input fluid icon='lock' iconPosition='left' placeholder='Password' type="password" value={this.state.password} onChange={ e => this.handleChange('password', e.target.value)} />
            </Form.Field>
            <Button fluid color="olive" size="large">LOGIN</Button>
          </Segment>
          <Message>
            First time here? <Link to={'/signup'}> Sign Up </Link>
          </Message>
        </Form>
      </Grid.Column>
    </Grid>

    </Switch>

    )
  }
}
