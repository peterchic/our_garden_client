import React from 'react'

export default class AddToCart extends React.Component {
  constructor(props){
    console.log(props)

    super(props)
    this.state = {
      quantity: '',
      farmer_product_id: 1,
      cart_id: 1
    }
  }

  quantity(e){
    this.setState({
      quantity: e.target.value
    })
  }

  productID(e){
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
      this.props.handleAddToCart(this.state.quantity, this.state.farmer_product_id, this.state.cart_id)
      // this.state.farmer_product_id
    this.setState({
      quantity: ''
      // farmer_product_id: 1
    })
  }

  render(){
    console.log(this.state.quantity)
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' onChange={this.quantity.bind(this)}/>
          <button>Add!</button>
        </form>
      </div>
    )
  }
}
