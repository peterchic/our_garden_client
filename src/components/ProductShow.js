import React from 'react'
// import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'
import { Grid, Card, Image } from 'semantic-ui-react'


export default function ProductShow (props) {
  const cart_id = props.current_user.cart_id ? props.current_user.cart_id : null
  console.log('props in ProductShow', props.farmersProduct[0].quantity);
  return (
    <div className='pad-15'>
      <div className='ui cards'>
    <Card color='olive'>
      <Image src={props.product.picture} alt={props.product.name} />
        <Card.Content>
          <Card.Header>
          {props.product.name}
        </Card.Header>
        <Card.Meta>
            Quantity: {props.farmersProduct[0].quantity}
          </Card.Meta>
          <Card.Meta>
            <h3>Price per lb: {props.farmersProduct[0].price}</h3>
          </Card.Meta>
          <Card.Description>
            {props.product.description}
          </Card.Description>
        </Card.Content>
        <div className='pad-15 float-right'>
          <AddToCart
            
            handleAddToCart={props.handleAddToCart}
            cart_id={cart_id}
            farmersProduct={props.farmersProduct}
          />
        </div>
      </Card>
    </div>
    </div>

  )
}
