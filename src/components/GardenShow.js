import React from 'react'
import ProductShow from './ProductShow'
import Reviews from './Reviews'
import ReviewList from './ReviewList'
import { Route } from 'react-router-dom'
import ReviewEdit from './ReviewEdit'
import { Grid, Divider, Button } from 'semantic-ui-react'
//Garden Page renders me

export default function GardenShow (props) {
  let name = props.farmer.name.split(' ')
  let firstName = name[0]

  if (!props.farmer) {
    return <h1>Loading the Show Page</h1>
  }
  const products = props.farmer.products.map(product => {
  var fp = props.farmer.farmer_products.filter( f_p => f_p.farmer_id === props.farmer.id && f_p.product_id === product.id)
    return (
      <div>
        <ProductShow product={product}
          farmersProduct={fp}
          handleAddToCart={props.handleAddToCart}
          current_user={props.current_user}
        />
      </div>
    )
  })

  return (
    <span>
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={3} id="farmer-image">
            <img alt={props.farmer.name} className='rcorners' src={props.farmer.picture}/>
          </Grid.Column>
          <Grid.Column width={13}>
            <h1>{props.farmer.name}</h1>
            <h1>{props.farmer.bio}</h1>
            <Button
              color='orange'
              size='medium'
              type="submit">
              Contact {firstName}
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div>
        <Grid>
          <Grid.Row className='product-page'>
            {products}
          </Grid.Row>
          <Grid.Column width={13}>
            <Divider horizontal><h2>Reviews</h2></Divider>
          </Grid.Column>
        </Grid>
        <Reviews
          handleReview={props.handleReview}
          farmer={props.farmer}
          current_user={props.current_user}
        />
        <ReviewList
          reviews={props.reviews}
          farmer={props.farmer}
          handleDeleteReview={props.handleDeleteReview}
          handleUpdateReview={props.handleUpdateReview}
          current_user={props.current_user}
        />
      </div>
      <div>
        <ul>
          <Route path="/farmers/:id/reviews/:id/edit" render={ ({match}) => {
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
        </ul>
      </div>
    </span>
  )
}
