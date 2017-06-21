import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import GardenShow from './GardenShow'
import { Grid } from 'semantic-ui-react'


export default function GardenPage(props){
  const farmersElements = props.farmers.map((farmer,i) =>
    <div key={farmer.id}>
      <Link to={`/farmers/${farmer.id}`}><h3>{farmer.name}</h3></Link>
    </div>)
    if (props.farmers){
      return(
        <div>
          <Grid>
            <Grid.Row width={2}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column width={6}>
              <div>
                <ul>
                  <h3>Your Local Gardeners:</h3>
                    { farmersElements }
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
      <div>
        <Switch>
          <Route exact path="/farmers/:id" render={ ({match}) => {
            const farmer = props.farmers.find(farmer => farmer.id === parseInt(match.params.id, 10))
              return (
                <GardenShow
                  farmer={farmer}
                  handleAddToCart={props.handleAddToCart}
                  current_user={props.current_user}
                  product_carts={props.product_carts}
                  products={props.product}
                  handleReview={props.handleReview}
                  reviews={props.reviews}
                  handleDeleteReview={props.handleDeleteReview}
                  handleUpdateReview={props.handleUpdateReview}
                />
              )
            }}
          />
        </Switch>
      </div>
    </Grid>
    </div>
    )
  } else {
    return (
      <div><h1>LOADING...</h1></div>
    )
  }
}
