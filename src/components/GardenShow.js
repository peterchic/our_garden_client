import React from 'react'
import AddToCart from './AddToCart'

export default function GardenShow (props) {
  // debugger

  // const fp = props.farmer.farmer_products.map(fp => {
  //   console.log('quantity', fp.quantity)
  //   fp.quantity})
  // const all = fp.map(q => q)


//
    const products = props.farmer.products.map(product => {
    // console.log(fp)
    var fp = props.farmer.farmer_products.filter( (f_p) => f_p.farmer_id === props.farmer.id && f_p.product_id === product.id)
      // debugger
      return (
        <div>
          <li>{product.name}</li>
          <li>{product.description}</li>
          <li>{fp[0].quantity}</li>
          <img src={product.picture}/>
          <AddToCart handleAddToCart={props.handleAddToCart} product_carts={props.product_carts}/>
        </div>
      )
  })

if (!props.farmer.products) {
    return (
      <h1>Loading the Show Page</h1>
      )
  }
  return (
    <div>
      <div>
        <h1>{props.farmer.name}</h1>
        <h1>{props.farmer.bio}</h1>
        <img src={props.farmer.picture}/>

        <div>
          <ul>{products}</ul>
        </div>
      </div>

    </div>
  )
}
