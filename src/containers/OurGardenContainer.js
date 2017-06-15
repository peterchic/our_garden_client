import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { editUser, getFarmers, getProducts, getUsers, getFarmerProducts, addToCart, editCart, createReview, getReviews, deleteReview, getProductCarts } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
import Search from '../components/Search'
import axios from 'axios'
import Account from '../components/Account'
import { withRouter } from 'react-router'



class OurGardenContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      farmers: [],
      users: [],
      products: [],
      searchTerm: '',
      cart: [],
      farmer_products: [],
      product_carts: []
    }
  }

  handleAddToCart(quantity, farmer_id, cart_id, product_id){
      // console.log('rails', quantity, farmer_id, cart_id, product_id)
        axios.post("http://localhost:3000/api/v1/product_carts", {
          product_cart: {
            quantity: quantity,
            farmer_id: farmer_id,
            cart_id: cart_id,
            product_id: product_id
          }
        })
        .then(res => this.setState(
          prevState => ({
            product_carts: [...prevState.product_carts, res.data]
          })
        ))
        this.handleFarmerProductUpdate(quantity, farmer_id, cart_id, product_id)
      }



      handleFarmerProductUpdate(quantity, farmer_id, cart_id, product_id){
        console.log('wtf is happening', quantity, farmer_id, cart_id, product_id);
        axios.patch(`http://localhost:3000/api/v1/farmer_products/${farmer_id}`, {
      product_cart: {
        quantity: quantity,
        farmer_product_id: farmer_product_id,
        cart_id: cart_id,
        product_id: product_id
      }
    })
    // .then( res => console.log('please', res.data[res.data.length -1] ) )


  //   .then(res => this.setState(
  //     prevState => ({
  //       farmer_products: res.data[res.data.length -1]
  //     })
  //   ))
  // }
  //replace last one with this one



    .then(res => this.setState({
        farmer_products: [res.data[res.data.length -1] ]
      })
    )
  }
  //replace last one with this one

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
    // console.log('container props', this.state)
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <h2>
          Cart: {this.state.product_carts.length}
        </h2>

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

      </div>
    )
  }
}

export default withRouter(OurGardenContainer)
