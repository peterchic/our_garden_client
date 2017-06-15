import React from 'react'
import { Link } from 'react-router-dom'

export default function ReviewShow (props) {
  // console.log('ReviewShow', reviews);
  // debugger
  //
  // handleClick(){
  //   props.handleDeleteReview(reviews)
  //
  // }

  const filtered = props.reviews.filter( review => review.farmer_id === props.farmer.id )
  const  reviews = filtered.map( review =>{
    return (
      <div>
        <p>
          Review: {review.review}
          Rating: {review.rating}
          <button value='Delete' onClick={() => props.handleDeleteReview(review.id)}>Delete </button>
          {/* <Link type='button' to={`/farmers/${props.farmer.id}/edit`}>Edit Review</Link> */}
        </p>
      </div>)
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
