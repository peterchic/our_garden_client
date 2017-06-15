import React from 'react'
import ProductShow from './ProductShow'
import Reviews from './Reviews'
import ReviewShow from './ReviewShow'
//Garden Page renders me

export default function GardenShow (props) {
  // console.log('garden showpage', props);

  if (!props.farmer) {
    return (
      <h1>Loading the Show Page</h1>
    )
  }
  // console.log('GS', props.farmer);
  const products = props.farmer.products.map(product => {
  var fp = props.farmer.farmer_products.filter( (f_p) => f_p.farmer_id === props.farmer.id && f_p.product_id === product.id)
    return (
      <div className="row">
        <ProductShow product={product} farmer={props.farmer} handleAddToCart={props.handleAddToCart}/>
      </div>
    )
  })

  return (
    <div className='ui grid'>
      <div className=' six column'>
        <h1>{props.farmer.name}</h1>
        <h1>{props.farmer.bio}</h1>
        <img src={props.farmer.picture}/>
        <Reviews handleReview={props.handleReview} farmer={props.farmer}/>
        <ReviewShow reviews={props.reviews} farmer={props.farmer} handleDeleteReview={props.handleDeleteReview}
        />

        <div className='two column'>
          <ul>{products}</ul>
        </div>

      </div>
    </div>
  )
}
