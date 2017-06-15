import React from 'react'
// import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

export default function ProductShow (props) {
  // constructor(){
  //   super()
  //   // this.state = {
  //   //   quantity: props.farmer.farmer_products[0].quantity
  //   // }
  // }

  // componentWillReceiveProps(props){
  //   this.setState({
  //     quantity: props.farmer.farmer_products[0].quantity
  //   })
  // }


  // render(){
    // console.log('Reached ProductShow', props.product)
    return (
      <div className='column'>
        <div className="ui card">
          <div className="image">
            <img src={props.product.picture}/>
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
              farmersProduct={props.farmersProduct}
            />
          </div>
        </div>
      </div>
        )
  }

// }
