import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import GardenShow from './GardenShow'
import { Grid } from 'semantic-ui-react'


export default function GardenPage(props){
  const farmerList = props.farmers.map((farmer,i) =>
    <div key={farmer.id}>
      <Link to={`/farmers/${farmer.id}`}><li className='ul'><h3>{farmer.name}</h3></li></Link>
    </div>)
    if (props.farmers){
      return(
        <span className='float-left'>
          <Grid celled='internally'>
            <Grid.Column width={3}>

              <div>
                <ul>
                  <h3>Your Local Gardeners:</h3>
                </ul>
                <ul>
                    { farmerList }
                </ul>
              </div>
            </Grid.Column>
          <Grid.Column className width={13}>
      <div>
        <Switch>
          <Route path="/farmers/:id" render={ ({match}) => {
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
    </Grid.Column>
  </Grid>
    </span>
    )
  } else {
    return (
      <div><h1>LOADING...</h1></div>
    )
  }
}
