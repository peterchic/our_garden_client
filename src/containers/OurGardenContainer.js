import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getFarmers, getUsers, getFarmerProducts, createReview, getReviews, deleteReview, getProductCarts, updateReview, decodeToken, login } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
import Search from '../components/Search'
import axios from 'axios'
// import Account from '../components/Account'
// import { withRouter } from 'react-router'
import CartShow from '../components/CartShow'
import NavBar from '../components/NavBar'
import LogInSignUp from './LogInSignUp'
import { Grid } from 'semantic-ui-react'

class OurGardenContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      farmers: [],
      current_user: {
        active_cart: false
      },
      // users: [],
      // products: [],
      // searchTerm: '',
      // cart: [],
      farmer_products: [],
      product_carts: []

    }
  }

  //######################### LOG IN/OUT ###############################


  // handleLogin(params){
  //   login(params)
  //   .then( resp => { console.log('Log In Response: ', resp)
  //   localStorage.setItem("token", resp.token)
  //   this.setState({
  //     current_user: resp.user
  //   }),this.props.history.push('/farmers')
  //   })
  // }

  handleLogin(params){
    fetch("http://localhost:3000/api/v1/login", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
    })
    .then( res => res.json() )
    .then( resp => { console.log('Log In Response: ', resp)
    localStorage.setItem("token", resp.token)
    this.setState({
      current_user: resp.user
    }),this.props.history.push('/farmers')
    })
  }

  handleSignUp(name, username, password, bio){
    axios.post('http://localhost:3000/api/v1/users', {
      user: {
        name: name,
        username: username,
        password: password,
        bio: bio
      }
    }).then(res => { console.log('Sign Up Response: ', res)
    localStorage.setItem("token", res.data.token)
    this.setState({
      current_user: res.data.user
    }),this.props.history.push('/farmers')
  }).catch( e => console.log('error from handleSignUp', e.response) )
  }

  logout(){
    // this.setState({
    //   current_user: { active_cart: false }
    // })
    localStorage.clear()
    // console.log('logout', this.state.current_user);
  }

  //################################ CART ################################

  handleAddToCart(quantity, farmer_id, cart_id, product_id){
    console.log('addCart to Rails', quantity, farmer_id, cart_id, product_id)
    axios.post("http://localhost:3000/api/v1/product_carts", {
      product_cart: {
        quantity: quantity,
        farmer_id: farmer_id,
        cart_id: cart_id,
        product_id: product_id
      }
    }).then(res => { console.log('return from rails', res)
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

    if(localStorage.getItem('token') && !this.state.current_user.id){
      decodeToken({token: localStorage.token})
        .then(res => {
          this.setState ({
        current_user: res
      })

      }
    )
  }}

//############################### REVIEWS ##################################

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

  //######################### RENDER ###############################

  render() {
    console.log('container props', this.state)
    if(localStorage.getItem('token')){
    return (
      <div>
        <Switch>
        <NavBar product_carts={this.state.product_carts} logout={this.logout.bind(this)} />
        <h2>Hey, {this.state.current_user.username}!</h2>
          <Route path='/cart' render={() =>
            <CartShow
              current_cart={this.state.product_carts}
              farmer_products={this.state.farmer_products}
              current_user={this.state.current_user}
            />
          }/>
          <Grid>
            <Grid.Column width={13}>
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
        </Grid.Column>
      </Grid>
          <Route exact path='/logout'/>
</Switch>
    </div>
      )
      } else {
      return (
        <div>
          <NavBar/>
          <LogInSignUp
            handleSignUp={this.handleSignUp.bind(this)}
            handleLogin={this.handleLogin.bind(this)}
          />
        </div>
      )
    }
  }
}

export default withRouter(OurGardenContainer)
