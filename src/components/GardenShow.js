import React from 'react'
import ProductShow from './ProductShow'
import Reviews from './Reviews'
import ReviewShow from './ReviewShow'
import { Route } from 'react-router-dom'
import ReviewEdit from './ReviewEdit'

//Garden Page renders me

export default function GardenShow (props) {
  // console.log('garden showpage', props);

  if (!props.farmer) {
    return (
      <h1>Loading the Show Page</h1>
    )
  }
  console.log('GS', props);
  // debugger
  const products = props.farmer.products.map(product => {
  var fp = props.farmer.farmer_products.filter( (f_p) => f_p.farmer_id === props.farmer.id && f_p.product_id === product.id)
    return (
      <div>
        <ProductShow
          product={product}
          farmersProduct={fp}
          handleAddToCart={props.handleAddToCart}
          current_user={props.current_user}
        />
      </div>
    )
  })

  return (
    <div>
      <div>
        <h1>{props.farmer.name}</h1>
        <h1>{props.farmer.bio}</h1>
        <img alt={props.farmer.name} src={props.farmer.picture}/>
        <Reviews
          handleReview={props.handleReview}
          farmer={props.farmer}
          current_user={props.current_user}
        />
        <ReviewShow
          reviews={props.reviews}
          farmer={props.farmer}
          handleDeleteReview={props.handleDeleteReview}
          handleUpdateReview={props.handleUpdateReview}
        />
        <Route
          path="/farmers/:id/reviews/:id/edit" render={ ({match}) => {
          const review = props.reviews.find(review => review.id === parseInt(match.params.id, 10))
            return (
              <ReviewEdit
                handleUpdateReview={props.handleUpdateReview}
                reviews={review}
                farmer={props.farmer}
              />
            )
        }}
      />
        <div>
          <ul>{products}</ul>
        </div>

      </div>
    </div>
  )
}
