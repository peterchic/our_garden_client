import React from 'react'

export default function ReviewShow (props) {
  // console.log('ReviewShow', reviews);
  // debugger

  const filtered = props.reviews.filter( review => review.farmer_id === props.farmer.id )
  const  reviews = filtered.map( review => <div><h3>Review: {review.review} Rating: {review.rating}</h3></div> )

  return(
    <div>
      <ul>
        {reviews}
      </ul>
    </div>
  )
}
