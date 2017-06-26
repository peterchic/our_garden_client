import React from 'react'
import { Button, Form, Dropdown, Grid } from 'semantic-ui-react'


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
    return(
      <div>
        {/* <Grid>
          <Grid.Row>
            <Grid.Column width={13}>

 */}

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
              value="Add to Basket">Add!
            </Button>
          </Form.Group>
        </Form>
      {/* </Grid.Column>
      </Grid.Row>
      </Grid> */}
      </div>
    )
  }
}
