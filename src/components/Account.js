import React from 'react'
// import farmer_img from '../images/farmer_9.jpg'
import { Image, Grid, Card, Header, Icon } from 'semantic-ui-react'


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
              <Icon name='close' type='submit' color='red' onClick={() => props.handleDeleteUser(props.current_user.id)}/>Delete Account!
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
}




{/* <Card.Header>Daniel</Card.Header> */}
