import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Icon } from 'semantic-ui-react'

export default function ReviewList (props) {
  const filtered = props.reviews.filter( review => review.farmer_id === props.farmer.id )
  const  reviews = filtered.map( (review, i) => {
    return (
      <Grid>
          <Grid.Column width={13}>
          <div>
            <Image className="thumbnail" src={review.user_thumbnail}/>
            <div key={i} id="reviews">
              <div>
                <h4>Rating: {review.rating}</h4>
              </div>
              <div>
                <h4>Review: {review.review}</h4>
              </div>
            </div>
            {props.current_user.id === review.user_id ? <div id="review-icons">
              <Icon
                link name='trash outline'
                size="large"
                onClick={() => props.handleDeleteReview(review.id)}
              />
              <Link to={`/farmers/${props.farmer.id}/reviews/${review.id}/edit`}>
                <Icon
                  name='pencil'
                  size="large"
                  color="grey"/>
              </Link>
            </div> : null}
          </div>
        </Grid.Column>
      </Grid>
    )
  })

  return (
    <div>
      {reviews}
    </div>
  )
}
