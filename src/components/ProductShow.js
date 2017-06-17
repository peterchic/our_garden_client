import React from 'react'
// import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

export default function ProductShow (props) {
  const cart_id = props.current_user.current_cart ? props.current_user.current_cart.id : null
  console.log('props in ProductShow', props);
  return (
    <div className='column'>
      <div className="ui card">
        <div className="image">
          <img alt={props.product.name} src={props.product.picture}/>
        </div>
        <div className="content">
          <h2>{props.product.name}</h2>
          <div className='extra content'>
            <h3>Quantity: {props.farmersProduct[0].quantity}</h3>
          </div>
          <div className='extra content'>
            <h3>Price per lb: {props.farmersProduct[0].price}</h3>
          </div>
          <div className="description">
            {props.product.description}
          </div>
          <AddToCart
            handleAddToCart={props.handleAddToCart}
            cart_id={cart_id}
            farmersProduct={props.farmersProduct}
          />
        </div>
      </div>
    </div>
  )
}
