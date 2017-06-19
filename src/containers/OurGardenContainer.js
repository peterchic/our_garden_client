import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { getFarmers, getUsers, getFarmerProducts, createReview, getReviews, deleteReview, getProductCarts, updateReview, decodeToken, login, deleteProduct } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
import Search from '../components/Search'
import axios from 'axios'
import Account from '../components/Account'
// import { withRouter } from 'react-router'
import CartShow from '../components/CartShow'
import NavBar from '../components/NavBar'
import LogInSignUp from './LogInSignUp'
import { Grid, Image } from 'semantic-ui-react'
import bg from '../images/bg_images/bg_1.png'


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

  //######################### LOG IN/OUT ###############################

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
  }).catch( e => console.log('error from login', e.response) )
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
    localStorage.clear('token')
  }

  //################################ CART ################################

  handleAddToCart(quantity, farmer_id, cart_id, product_id){
    // console.log('addCart to Rails', quantity, farmer_id, cart_id, product_id)
    axios.post("http://localhost:3000/api/v1/product_carts", {
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
          product_carts: [
            ...prevState.product_carts,
            res.data.product_cart
          ],
          farmers: updatedFarmers,
        }
      ))
    })
  }

  handleDeleteProduct(id){
    deleteProduct(id)
    .then((data) => this.setState({
      product_carts: data
    }))
  }

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

  // const cartCount = this.state.current_user.products.length === 0 ? {this.state.current_user.username} : {this.state.current_user.username}! ${this.state.current_user.products.length} items ready to purchase!
  // console.log('container props', this.state)


  //############################## RENDER ###############################


  render() {

    if(localStorage.getItem('token') && this.state.current_user !== 0){
    return (
      <div>

        <NavBar current_user={this.state.current_user} logout={this.logout.bind(this)} product_carts={this.state.product_carts} />
        <Image src={bg} fluid />

        <Grid>
          <Grid.Row>
            <Grid.Column width={1}>
            </Grid.Column>
            <div>
              <h3>Hey, {this.state.current_user.username}! {this.state.current_user.products.length} items ready to purchase!</h3>
            </div>
      </Grid.Row>
          <Switch>
          <Route exact path='/cart' render={() =>
            <CartShow
              current_cart={this.state.product_carts}
              farmer_products={this.state.farmer_products}
              current_user={this.state.current_user}
              product_carts={this.state.product_carts}
              farmers={this.state.farmers}
              handleDeleteProduct={this.handleDeleteProduct.bind(this)}
            />
          }/>
          <Route exact path='/account' render={() =>
            <Account
              current_user={this.state.current_user}
            />
          }/>
          <Grid.Row width={3}>
          <Grid.Column width={13}>
          <Route path='/farmers' render={() =>
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
            />
          }/>
        </Grid.Column>
        <Grid.Column>
        </Grid.Column>
        </Grid.Row>
          <Route exact path='/logout'/>
        </Switch>
      </Grid>
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
