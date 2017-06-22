import React from 'react'
import { Link } from 'react-router-dom'
// import ReviewEdit from './ReviewEdit'
import { Icon, Divider, Grid, Message } from 'semantic-ui-react'


export default function ReviewShow (props) {

  const filtered = props.reviews.filter( review => review.farmer_id === props.farmer.id )
  const  reviews = filtered.map( review => {
    // if(props.reviews.user_id !== props.current_user.id){
    //   return (
    //     Review: {review.review}<br/>
    //     Rating: {review.rating}
    //   )
    // } else {
      return (
        <div>
          {/* <Grid> */}
            {/* <Grid.Row> */}
            {/* <Grid.Column>
              <h3>Review: {review.review}</h3>
          </Grid.Column> */}
          <div>
            <h3>Rating: {review.rating}</h3>
            <Icon name='close' color='red' onClick={() => props.handleDeleteReview(review.id)}/>
            <Link type='button' to={`/farmers/${props.farmer.id}/reviews/${review.id}/edit`}>Edit</Link>

          </div>
          <Message visible>
            {review.review}
          </Message>
        {/* </Grid.Row> */}
          {/* <Grid.Row> */}
            {/* <Grid.Column> */}
            {/* </Grid.Column> */}


              {/* <Divider horizontal></Divider> */}
          {/* </Grid.Row> */}
          {/* </Grid> */}
        </div>

      )
    })

  return (
    <div>

        {reviews}

    </div>
  )
}
