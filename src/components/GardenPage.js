import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import GardenShow from './GardenShow'

export default function GardenPage(props){
  const farmersElements = props.farmers.map((farmer,i) =>
    <div key={farmer.id}>
      <Link to={`/farmers/${farmer.id}`}><h3>{farmer.name}</h3></Link>
    </div>)

if (props.farmers){
    return(
    <div>
      <div>
        <h3>Your Local Gardeners:</h3>
        <ul>
          { farmersElements }
        </ul>
      </div>

      <div>
        <Switch>
          <Route exact path="/farmers/:id" render={ ({match}) => {
            const farmer = props.farmers.find(farmer => farmer.id === parseInt(match.params.id))
            return (
              <GardenShow
                farmer={farmer}
                handleAddToCart={props.handleAddToCart}
                product_carts={props.product_carts}
                products={props.product}
                handleReview={props.handleReview}
                reviews={props.reviews}
              />
            )
          }} />
        </Switch>
      </div>
    </div>
    )
  } else {
    return (
      <div><h1>LOADING...</h1></div>
    )
  }
}
