import React from 'react'


export default class AddToCart extends React.Component {
  constructor(props){
    console.log('cart', props)

    super(props)
    this.state = {
      quantity: '',
      farmer_id: '',
      product_id: ''
    }
  }

  handleChange(f_id, p_id, e){
    this.setState({
      farmer_id: f_id,
      product_id: p_id,
      quantity: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
      this.props.handleAddToCart(
        this.state.quantity,
        this.state.farmer_id,
        this.props.cart_id,
        this.state.product_id
      )

      this.setState({
      quantity: ''
    })
  }

  render(){
    // console.log('product_id', this.props.fp[0].product_id)
    // console.log('props in AddToCart', this.props)
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input
            type='text' value={this.state.quantity}
            onChange={ (e) => this.handleChange(this.props.farmersProduct[0].farmer_id, this.props.farmersProduct[0].product_id, e)}
          />
          <input
            type="submit"
            value="Add to Basket"
          />
        </form>
      </div>
    )
  }
}
