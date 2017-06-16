import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { editUser, getFarmers, getProducts, getUsers, getFarmerProducts, addToCart, editCart, createReview, getReviews, deleteReview, getProductCarts, updateReview } from '../api/RailsAPI'
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
      console.log('to rails q', quantity)
      console.log('to rails f_id', farmer_id)
      console.log('to rails cart', cart_id)
      console.log('to rails p_id', product_id)
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




  // handleUpdateWatchlist(id, name, description){
  // editWatchlist(id, name, description)
  // .then( updatedWatchlist => {
  //   const newWatchlists = this.state.watchlists.map( wl => {
  //     if (wl.id === updatedWatchlist.id ) {
  //       return updatedWatchlist
  //     } else { return wl }
  //     })
  //   this.setState({watchlists: newWatchlists})
  //   }
  //   )
  // }


  cartImages(){
    this.state.farmers.filter
  }

  render() {
    // debugger
    console.log('container props', this.state)
    if(localStorage.getItem('token')){
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <h2>
          Cart: {this.state.product_carts.length}

{/* <CartShow products={this.state.product_carts} farmer_products={this.state.farmer_products}/> */}


        {/* <Modal trigger={<Button>Cart</Button>}>

          <Modal.Header>Healthy Living!</Modal.Header>

          <Modal.Content image>
            <Image wrapped size='medium' src='/images/produce_basket.png' />

            <Modal.Description>
              <Header>Modal Header</Header>
              <CartShow products={this.state.product_carts} farmer_products={this.state.farmer_products}/>
            </Modal.Description>

          </Modal.Content>

          <Modal.Actions>
            <Button primary>
              Check Out <Icon name='right chevron' />
            </Button>
          </Modal.Actions>
        </Modal> */}




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
                <LogInSignUp />
              </div>
            )
          }
          }
          }

          // export default ModalScrollingExample


// export default withRouter(OurGardenContainer)
