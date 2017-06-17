import React from 'react'
import { Link } from 'react-router-dom'
// import ReviewEdit from './ReviewEdit'
import { Icon } from 'semantic-ui-react'


export default function ReviewShow (props) {
  // console.log('ReviewShow', reviews);
  // debugger
  //
  // handleUpdateReview(e){
  //   console.log('updatereview', e);
  //   props.handleDeleteReview(reviews)
  //
  // }
  // console.log('RevShow', props)
  // debugger
  const filtered = props.reviews.filter( review => review.farmer_id === props.farmer.id )
  const  reviews = filtered.map( review =>{
    return (
      <div>
        <div>
          <h3>
            Review: {review.review}
            Rating: {review.rating}
            <Icon name='close' color='red' onClick={() => props.handleDeleteReview(review.id)}/>
            {/* <Icon name='pencil' render={() => <ReviewEdit onClick={() => props.handleUpdateReview(review.id)}/>}/> */}
            <Link type='button' to={`/farmers/${props.farmer.id}/reviews/${review.id}/edit`}>Edit Review</Link>

            {/* <Modal
              trigger={<Button>Edit</Button>}
              header='Edit Youre Review'
              content='Are you sure you want to delete your account'
              actions={[
                { key: 'no', content: 'No', color: 'red', triggerClose: true },
                { key: 'yes', content: 'Yes', color: 'green', triggerClose: true },
              ]}
            /> */}






            {/* <Link type='button' to={`/farmers/${props.farmer.id}/reviews/${review.id}/edit`}>Edit Review</Link> */}
          </h3>

        </div>
          {/* <Button icon><Icon name='pencil' <Link to={`/farmers/${props.farmer.id}/edit`}</Link>/><Icon name='pencil'/></Button> */}
          {/* <button onClick={() => <ReviewEdit handleUpdateReview={props.handleUpdateReview(review.id, review.review, review.rating)} reviews={props.reviews} /> }> Edit </button> */}

      </div>
    )
  })

  return(
    <div>
      <ul>
        {reviews}
      </ul>
    </div>
  )
}

// return (
//   <div>
//     <div>
//       {<h1>{props.watchlist.name}</h1>
//         <h1>{props.watchlist.description}</h1>}
//       <Link className="btn btn-primary" to={`/watchlists/${props.watchlist.id}/edit`}>Edit Watchlist</Link>
//       <button className='btn btn-danger' onClick={() => props.onDelete(props.watchlist.id)}>Remove</button>
//       <ul className="list-group">
//         {props.watchlist.movies.map( movie =>
//           <div>
//             <li className="list-group-item" key={movie.id}><Link to={`/movies/${movie.id}`}><h3>{movie.title}</h3></Link><button type="button" className="btn btn-danger" onClick={() => deleteMovieFromWatchList(movie.id, props.watchlist.id, props)}>Remove</button></li>
//           </div>
//         )}
//       </ul>
//     </div>
//
//   </div>
// )
// }
