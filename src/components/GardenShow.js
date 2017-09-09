import React from 'react'
import ProductShow from './ProductShow'
import Reviews from './Reviews'
import ReviewList from './ReviewList'
import { Route, Link } from 'react-router-dom'
import ReviewEdit from './ReviewEdit'
import { Grid, Divider, Button, Modal } from 'semantic-ui-react'
//Garden Page renders me

export default function GardenShow (props) {
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

  let name = props.farmer.name.split(' ')
  let firstName = name[0]

  let firstNameDown = name[0].toLowerCase()
  let lastNameDown = name[1].toLowerCase()

  let email = `https://mail.google.com/mail/?view=cm&fs=1&to=${firstNameDown}.${lastNameDown}@gmail.com&su=Our_Garden_Question&body=Hello!`

  return (
    <span>
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={3} id="farmer-image">
            <img alt={props.farmer.name} className='rcorners' src={props.farmer.picture}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <h1>{props.farmer.name}</h1>
            <h1>{props.farmer.bio}</h1>
            <Modal
              trigger={<Button color="orange">Contact {firstName}</Button>}
              header={`${firstName} would love to hear from you! Select from the options below:`}
              size="small"
              actions={[
                { key: 'no', content: 'Text', color: 'blue', triggerClose: true },
                <Link to={email}><Button color='green'>E-mail</Button></Link>
              ]}
            />
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
      </div>
    </span>
  )
}
