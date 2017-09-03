import React from 'react'
// import farmer_img from '../images/farmer_9.jpg'
import { Grid, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default function Account(props) {
console.log('account', props);


    return(
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src={props.current_user.picture} size='medium' shape='circular' />
              <h3>{props.current_user.bio}</h3>
              <Link color="white" to={'/account/edit'}><Button size="tiny" floated="right" color="blue">Edit Account</Button></Link>
              <Button size="tiny" floated="right" color="red" onClick={() => props.handleDeleteUser(props.current_user.id)}>Delete Account</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
}
