import React from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class AddToCart extends React.Component {
  constructor(props){
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
    return(
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)} className='float-right'>
          <Form.Group>
            <Form.Input
              placeholder='5'
              type='number'
              min='0'
              max={this.props.farmersProduct[0].quantity}
              value={this.state.quantity}
              onChange={ (e) => this.handleChange(this.props.farmersProduct[0].farmer_id, this.props.farmersProduct[0].product_id, e)}
            />
            <Button
              color='orange'
              size='medium'
              type="submit"
              value="Add to Cart">Add!
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
