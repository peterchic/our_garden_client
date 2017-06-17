import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getFarmers, getUsers, getFarmerProducts, createReview, getReviews, deleteReview, getProductCarts, updateReview, decodeToken } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
import Search from '../components/Search'
import axios from 'axios'
// import Account from '../components/Account'
// import { withRouter } from 'react-router'
// import CartShow from '../components/CartShow'
import NavBar from '../components/NavBar'
import LogInSignUp from './LogInSignUp'
// import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class OurGardenContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      farmers: [],
      current_user: {},
      // users: [],
      // products: [],
      // searchTerm: '',
      cart: [],
      farmer_products: [],
      product_carts: []
    }
  }

  //######## LOG IN/OUT #############

  handleLogin(params){
    return fetch("http://localhost:3000/api/v1/sign_in", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
    })
    .then( res => res.json() )
    .then( resp => { console.log('Log In Response: ', resp)

      // localStorage.setItem("token", resp.token)

      // send back entire user object as the response from Rails
      // not just the string of username
      // something that looks like this:
      // {
          //  username: "pete",
          //  bio: "whksdahkjas",
          //  zip: 123445,
          //  current_cart: {
          //    id: 3,
          //  }
          //  products: [{}]
      // }

      // store entire current_user object in React state
      this.setState({
        current_user: resp.user
      })
      //
      localStorage.setItem("token", resp.token)
      // localStorage.setItem("username", resp.username)
      this.props.history.push('/farmers')
    }
    )
  }

  logout(){
    this.setState({
      current_user: {
        active_cart: false
      }
    })
    localStorage.clear()
    console.log('logout', this.state.current_user);
  }

  //######## CART ##############

  handleAddToCart(quantity, farmer_id, cart_id, product_id){
    console.log('addCart to Rails', quantity, farmer_id, cart_id, product_id)
    axios.post("http://localhost:3000/api/v1/product_carts", {
      product_cart: {
        quantity: quantity,
        farmer_id: farmer_id,
        cart_id: cart_id,
        product_id: product_id
      }
    })
    .then(res => { console.log('return from rails', res)
    const farmerProduct = res.data.farmer_product //our return from API
    const updatedFarmers = this.state.farmers.slice() //creates a duplicate of array when parameters are not entered
    // step 1: find the farmer we want to update their product
    const farmer = updatedFarmers.find(farmer => farmer.id === farmerProduct.farmer_id)
    // step 2: find that farmer's farmer_product that matches the farmer_product from api response
    farmer.farmer_products = farmer.farmer_products.map( f_p => {
      if(farmerProduct.product_id === f_p.product_id) {
        return farmerProduct
      } else {
        return f_p
      }
    })
      this.setState( prevState => (
        {
          product_carts: [
            ...prevState.product_carts,
            res.data.product_cart
          ],
          farmers: updatedFarmers
        }
      ))
    })
  }

  componentDidMount() {
    getFarmers()
      .then( res => this.setState({
      farmers: res
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


    // if (there's a token in local storage && theres no current user in state) {
    //   fetch the user
    //   update the current_user key in your state using this.setState and the response
    //   (this will look just like it does in the handleLogin function, you may need to double check that the response from your server matched what it does there)
    // }
    if(localStorage.getItem('token') && !this.state.current_user.id){
      decodeToken({token: localStorage.token})
        .then(res => {
          this.setState ({
        current_user: res
      })

      }
    )
  }}

//############ REVIEWS #####################

  handleReview(review, rating, user_id, farmer_id ){
    createReview(review, rating, user_id, farmer_id)
    .then (review => this.setState(
      prevState => ({
        reviews: [...prevState.reviews, review]
      })
    )).catch(e => console.log('errorrrrr', e))
  }

  handleDeleteReview(id){
    deleteReview(id)
    .then((data) => this.setState({
      reviews: data
    }))
  }

  handleUpdateReview(id, review, rating){
    updateReview(id, review, rating)
    .then( updatedReview => {
      const newReviews = this.state.reviews.map( rev => {
        if (rev.id === updatedReview.id ) {
          return updatedReview
        } else {
          return rev
        }
      })
      this.setState({
        reviews: newReviews
      })
      this.props.history.push(`/farmers/${updatedReview.farmer_id}`)
    })
  }

  render() {
    // debugger
    console.log('container props', this.state)
    if(localStorage.getItem('token')){
    return (
      <div>
        <NavBar title="OurGarden" color="white" logout={this.logout.bind(this)} />
        {/* <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} /> */}
        <h2>
          Cart: {this.state.product_carts.length}

        {/* <CartShow products={this.state.product_carts} farmer_products={this.state.farmer_products}/> */}
        </h2>
        <Switch>
          <Route path='/farmers' render={ () =>
            <GardenPage
              current_user={this.state.current_user}
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
              handleUpdateReview={this.handleUpdateReview.bind(this)}
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
          <LogInSignUp handleLogin={this.handleLogin.bind(this) } />
        </div>
      )
    }
  }
}

export default withRouter(OurGardenContainer)
