import React from 'react'
// import farmer_img from '../images/farmer_9.jpg'
import { Grid, Button } from 'semantic-ui-react'
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
              {/* <div className="thumbnail"> */}
                <img className="account-image" src={props.current_user.picture}/>
              {/* </div> */}
              <h3>{props.current_user.bio}</h3>
              <Link color="white" to={'/account/edit'}><Button size="tiny" floated="right" color="blue">Edit Account</Button></Link>
              <Button size="tiny" floated="right" color="red" onClick={() => props.handleDeleteUser(props.current_user.id)}>Delete Account</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
}
