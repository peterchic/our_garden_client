import React from 'react'
import SignUp from '../components/SignUp'
import LogInForm from '../components/LogInForm'
import { Link } from 'react-router-dom'
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'

export default function LogInSignUp (props){

  // render(){
    // console.log('LogInSignup props', this.props)
    return(
      <div>
        {/* <SignUp handleSignUp={props.handleSignUp}/>
        <LogInForm handleLogin={props.handleLogin} /> */}


<Grid centered verticalAlign="middle">
  <Grid.Column textAlign="center">
    <Header as='h2' color='olive'>
      <Image src='http://semantic-ui.com/examples/assets/images/logo.png' />
      Log-in to your account
    </Header>
    <Form size="large">
      <Segment stacked>
        <Form.Field>
          <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
        </Form.Field>
        <Form.Field>
          <Input fluid icon='lock' iconPosition='left' placeholder='Password' type="password" />
        </Form.Field>
        <Button fluid color="teal" size="large"  >LOGIN</Button>
      </Segment>
      <Message>
        New to us? <a href="#" >Sign Up</a>
      </Message>
    </Form>
  </Grid.Column>
</Grid>

</div>
)
// }
}

{/* <SignUp handleSignUp={props.handleSignUp}/>
<LogInForm handleLogin={props.handleLogin}/> */}
