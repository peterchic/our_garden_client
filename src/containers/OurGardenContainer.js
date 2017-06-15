import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { editUser, getFarmers, getProducts, getUsers, getFarmerProducts, addToCart, editCart, createReview, getReviews, deleteReview, getProductCarts } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
import Search from '../components/Search'
import axios from 'axios'
import Account from '../components/Account'
import { withRouter } from 'react-router'
import CartShow from '../components/CartShow'
import NavBar from '../components/NavBar'
import LogInSignUp from './LogInSignUp'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

export default class OurGardenContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      farmers: [],
      users: [],
      // products: [],
      searchTerm: '',
      cart: [],
      farmer_products: [],
      product_carts: []
    }
  }

  handleAddToCart(quantity, farmer_id, cart_id, product_id){
      console.log('going to...', quantity, farmer_id, cart_id, product_id)
        axios.post("http://localhost:3000/api/v1/product_carts", {
          product_cart: {
            quantity: quantity,
            farmer_id: farmer_id,
            cart_id: cart_id,
            product_id: product_id
          }
        })
        .then(res => { console.log('return from rails', res)
          this.setState(
          prevState => ({
            product_carts: [...prevState.product_carts, res.data.product_cart],
            farmers:
            [...this.state.farmers.filter( farmer => farmer.id !== farmer_id ),
              Object.assign({}, this.state.farmers.find( farmer => farmer.id === farmer_id ),
              //Line 48 sets the farmer_products key to 1)farmer.id to a farmer_id(fp table) then filters
              {farmer_products: [...this.state.farmers.find( farmer => farmer.id === farmer_id ).farmer_products.filter( fp => fp.id !== res.data.farmer_product.id), res.data.farmer_product] })]

          })
        )
      })
    }

  componentDidMount() {
    getFarmers()
      .then( res => this.setState({
      farmers: res
    }))
    getUsers()
      .then(res => this.setState ({
      users: res
    }))
    getReviews()
      .then(res => this.setState ({
      reviews: res
    }))
    getProductCarts()
      .then(res => this.setState ({
      product_carts: res
    }))
    getFarmerProducts()
      .then(res => this.setState ({
      farmer_products: res
    }))
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleReview(review, rating, user_id, farmer_id ){
    // console.log('axios review', farmer_id);
    createReview(review, rating, user_id, farmer_id)
    .then (review => this.setState( prevState => ({ reviews: [...prevState.reviews, review] })
  )).catch(e => console.log('errorrrrr', e))
  }

  handleDeleteReview(id){
    deleteReview(id)
    .then((data) => this.setState({
      reviews: data
    })
    )
  }

  render() {
    // debugger
    console.log('container props', this.state)
    if(localStorage.getItem('token')){
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <h2>
          <CartShow products={this.state.product_carts} farmer_products={this.state.farmer_products}/>
        </h2>
        <Switch>
          <Route path='/farmers' render={ () =>
            <GardenPage
              farmers={this.state.farmers}
              products={this.state.products}
              searchTerm={this.state.searchTerm}
              users={this.state.users}
              farmer_products={this.state.farmer_products}
              handleAddToCart={this.handleAddToCart.bind(this)}
              product_carts={this.state.product_carts}
              handleReview={this.handleReview.bind(this)}
              reviews={this.state.reviews}
              handleDeleteReview={this.handleDeleteReview.bind(this)}
            />}
          />

          <Route exact path='/logout'/>
        </Switch>

      </div>
          )
          } else {
            return (
              <div>
                <NavBar title="OurGarden" color="white" />
                <LogInSignUp />
              </div>
            )
          }
          }
          }

          // export default ModalScrollingExample


// export default withRouter(OurGardenContainer)
