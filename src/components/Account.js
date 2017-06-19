import React from 'react'
import farmer_img from '../images/farmer_9.jpg'
import { Image, Grid, Card, Header } from 'semantic-ui-react'


export default function Account(props) {
// console.log('account', props);
    return(
      <div>
        <Grid>
            <Grid.Column width={16}>
              {/* <Header as='h2' attached='top'>{props.current_user.username}</Header> */}
              <Image src={farmer_img} size='large' shape='circular' />
            </Grid.Column>
            <Grid.Column width={16}>
              <h3>{props.current_user.bio}</h3>
            </Grid.Column>
            {/* <Grid.Column width={3}>
              <Image src='/assets/images/wireframe/media-paragraph.png' />
            </Grid.Column> */}
          </Grid>
      </div>
    )
}




{/* <Card.Header>Daniel</Card.Header> */}
