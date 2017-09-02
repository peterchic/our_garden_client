import React from 'react'
import { Link } from 'react-router-dom'
// import ReviewEdit from './ReviewEdit'
import { Icon, Divider, Grid, Message, Button } from 'semantic-ui-react'


export default function ReviewList (props) {

  const filtered = props.reviews.filter( review => review.farmer_id === props.farmer.id )
  const  reviews = filtered.map( review => {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
          <div className="ui comments">
            <div className="comment">
              <div class="metadata">
                <h4>Rating: {review.rating}</h4>
                <div class="date">
                </div>
              </div>
              <div className="text">
                <h4>Review: {review.review}</h4>
              </div>
              <div className="text">
                <Button size="mini" color="red" onClick={() => props.handleDeleteReview(review.id)}>Delete</Button>
                <Link color="white" to={`/farmers/${props.farmer.id}/reviews/${review.id}/edit`}><Button size="mini" color="gray">Edit</Button></Link>
              </div>
            </div>
          </div>

            <Divider></Divider>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  })

  return (
    <div>
      {reviews}
    </div>
  )
}
