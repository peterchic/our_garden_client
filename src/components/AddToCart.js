import React from 'react'


export default class AddToCart extends React.Component {
  constructor(props){
    console.log('cart', props.farmer.farmer_products[0])

    super(props)
    this.state = {
      quantity: '',
      farmer_id: '',
      cart_id: 1,
      product_id: this.props.farmer.products[0].id
    }
  }

  handleChange(id, e){
    this.setState({
      farmer_id: id,
      quantity: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
      this.props.handleAddToCart(this.state.quantity, this.state.farmer_id, this.state.cart_id, this.state.product_id)
      this.setState({
      quantity: ''
    })
  }

  render(){
    // console.log('product_id', this.props.fp[0].product_id)
    // console.log('farmer_product_id', this.props.fp[0].farmer_product_id)
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={ (e) => this.handleChange(this.props.farmer.id, e)}/>
          <input type="submit" value="Add to Basket"/>
        </form>
      </div>
    )
  }
}
