import React from 'react'
// import farmer_img from '../images/farmer_9.jpg'
import { Image, Grid, Card, Header, Icon } from 'semantic-ui-react'


export default function Account(props) {
console.log('account', props);


    return(
      <div>
              <Image src={props.current_user.picture} size='large' shape='circular' />
              <h3>{props.current_user.bio}</h3>
              <Icon name='close' color='red' onClick={() => props.handleDeleteUser(props.current_user.id)}/>

      </div>
    )
}




{/* <Card.Header>Daniel</Card.Header> */}
