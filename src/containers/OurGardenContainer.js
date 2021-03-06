import axios from 'axios'
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import {
  createReview,
  decodeToken,
  deleteProduct,
  deleteReview,
  deleteUser,
  editUser
  getFarmerProducts,
  getFarmers
  getProductCarts,
  getReviews,
  updateReview, } from '../api/RailsAPI'

import LogInSignUp from './LogInSignUp'
import NavBar from '../components/NavBar'
import Account from '../components/Account'
import CartShow from '../components/CartShow'
import { Grid } from 'semantic-ui-react'
import GardenPage from '../components/GardenPage'
import UserEdit from '../components/UserEdit'

// const baseUrl = "https://our-garden-api.herokuapp.com"
const baseUrl = "http://localhost:3000/api/v1/"

class OurGardenContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      farmers: [],
      current_user: 0,
      farmer_products: [],
      product_carts: []
    }
  }

  componentDidMount() {
    if(localStorage.getItem('token') && !this.state.current_user.id){
      decodeToken({token: localStorage.token})
        .then(res => {
          this.setState ({
          current_user: res
        })
      })
    }
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
  }

  componentWillReceiveProps(nextProps){
    nextProps.product_carts !== this.state.product_carts
    ? this.setState({
      current_user: this.state.current_user
    })
    : null
  }

  //######################### LOG IN/OUT DELETE USER ###############################

  handleLogin(params){
    fetch(`${baseUrl}login`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    })
    .then( res => res.json() )
    .then( res => {
      if (res.error) {
        return alert(`Sorry, ${res.error}! Try again.`)
      }
      localStorage.setItem("token", res.token)
      this.setState({
        current_user: res.user
      })
      this.props.history.push('/farmers')
    }).catch( e => console.log('error from login', e.response) )
  }

  handleSignUp(name, username, password, bio, picture){
    axios.post(`${baseUrl}users`, {
      user: {
        name: name,
        username: username,
        password: password,
        bio: bio,
        picture: picture
      }
    }).then(res => { console.log('Sign Up Response: ', res)
    localStorage.setItem("token", res.data.token)
    this.setState({
      current_user: res.data.user
    })
    this.props.history.push('/farmers')
  }).catch( e => alert("Missing information. Please fill in all fields below.") )
  }

  logout(){
    localStorage.clear('token')
  }

  handleDeleteUser(id){
    deleteUser(id)
    .then((data) => this.setState({
      current_user: data
    }))
    localStorage.clear('token')
    .catch( err => console.log(err) )
  }

  handleEditUser(id, name, username, password, bio, picture){
    editUser(id, name, username, password, bio, picture)
    .then((data) => this.setState({
        current_user: data
      })
    )
    this.props.history.push('/account')
  }


  //################################ CART ################################

  handleAddToCart(quantity, farmer_id, cart_id, product_id){
    axios.post(`${baseUrl}product_carts`, {
      product_cart: {
        quantity: quantity,
        farmer_id: farmer_id,
        cart_id: cart_id,
        product_id: product_id
      }
    }).then(res => { console.log('return from rails', res)
    const farmerProduct = res.data.farmer_product
    const updatedFarmers = this.state.farmers.slice()
    const farmer = updatedFarmers.find(farmer => farmer.id === farmerProduct.farmer_id)
    farmer.farmer_products = farmer.farmer_products.map( f_p => {
      if(farmerProduct.product_id === f_p.product_id) {
        return farmerProduct
      } else {
        return f_p
      }
    })
      this.setState( prevState => (
        {
          ...prevState,
          current_user: {
            ...prevState.current_user,
            current_cart: res.data.current_cart
          },
          farmers: updatedFarmers
        }
      ))
    })
  }

  handleDeleteProduct(id){
    deleteProduct(id)
    .then((data) => this.setState( prevState => {
      const current_cart = prevState.current_user.current_cart
      const next_cart = {}
      for (let product in current_cart) {
        if (current_cart[product].pc_id !== id) {
          next_cart[product] = current_cart[product]
        }
      }
      return { ...prevState, current_user: {...prevState.current_user, current_cart: next_cart} }
    }) )
  }

//############################### REVIEWS ##################################

  handleReview(review, rating, user_id, farmer_id ){
    createReview(review, rating, user_id, farmer_id)
    .then (review => this.setState(
      prevState => ({
        reviews: [...prevState.reviews, review]
      })
    )).catch(e => console.log('error with reviews', e))
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

  //############################## RENDER ###############################

  render() {
    if(localStorage.getItem('token') && this.state.current_user !== 0){
      return (
        <div>
          <NavBar current_user={this.state.current_user} logout={this.logout.bind(this)} product_carts={this.state.product_carts} />

          <Route path='/farmers' render={() =>
            <GardenPage
              users={this.state.users}
              farmers={this.state.farmers}
              reviews={this.state.reviews}
              products={this.state.products}
              searchTerm={this.state.searchTerm}
              current_user={this.state.current_user}
              product_carts={this.state.product_carts}
              handleReview={this.handleReview.bind(this)}
              farmer_products={this.state.farmer_products}
              handleAddToCart={this.handleAddToCart.bind(this)}
              handleDeleteReview={this.handleDeleteReview.bind(this)}
              handleUpdateReview={this.handleUpdateReview.bind(this)}
            />
          }/>
          <Grid>
            <Grid.Column width={16}>
            <Route exact path='/cart' render={() =>
              <CartShow
                farmers={this.state.farmers}
                current_user={this.state.current_user}
                product_carts={this.state.product_carts}
                farmer_products={this.state.farmer_products}
                handleDeleteProduct={this.handleDeleteProduct.bind(this)}
              />
            }/>
              <Switch>
                <Grid.Column width={2}>
                  <Route path='/account' render={() =>
                    <Account
                      current_user={this.state.current_user}
                      editUser={this.handleEditUser.bind(this)}
                      handleDeleteUser={this.handleDeleteUser.bind(this)}
                    />
                  }/>
                  <Route path='/account/edit' render={() =>
                    <UserEdit
                      current_user={this.state.current_user}
                      editUser={this.handleEditUser.bind(this)}
                    />
                  }/>
                </Grid.Column>
                <Route exact path='/logout'/>
              </Switch>
            </Grid.Column>
          </Grid>
        </div>
      )
    } else {
      return (
        <div>
          <NavBar/>
          <LogInSignUp
            handleLogin={this.handleLogin.bind(this)}
            handleSignUp={this.handleSignUp.bind(this)}
          />
        </div>
      )
    }
  }
}

export default withRouter(OurGardenContainer)
