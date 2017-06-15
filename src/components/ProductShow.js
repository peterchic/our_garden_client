import React from 'react'
// import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

export default class ProductShow extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: props.farmer.farmer_products[0].quantity
    }
  }

  componentWillReceiveProps(props){
    this.setState({
      quantity: props.farmer.farmer_products[0].quantity
    })
  }


  render(){
      console.log('Reached ProductShow', this.props);
      return (
        <div className='column'>
          <div className="ui card">
            <div className="image">
              <img src={this.props.product.picture}/>
            </div>
            <div className="content">
              <h2>{this.props.product.name}</h2>
              <div className='extra content'>
                <h3>Quantity: {this.state.quantity}</h3>
              </div>
              <div className='extra content'>
                <h3>Price per lb: {this.props.farmer.farmer_products[0].price}</h3>
              </div>
              <div className="description">
                {this.props.product.description}
              </div>
              <AddToCart
                handleAddToCart={this.props.handleAddToCart}
                farmer={this.props.farmer}
              />
            </div>
          </div>
        </div>
        )
  }

}
