import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { editUser, getFarmers, getProducts, getUsers, getFarmerProducts } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
import Search from '../components/Search'
// import { getWatchlists, createJoin, createList, editWatchlist, deleteWatchlist, getMovies } from '../api/indexRailsAPI'
// import { MDBapiCall } from '../api/indexMDB'
// import WatchlistsPage from '../components/WatchlistsPage'



export default class OurGardenContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      farmers: [],
      users: [],
      products: [],
      searchTerm: '',
      farmer_products: [],
      userCart: []

    }
  }

  handleAddToCart(e){
    this.setState({
      userCart: e.target.value
    })
  }

  componentDidMount() {
    getFarmers()
      .then( res => this.setState({
      farmers: res
    }))
    getProducts()
      .then(res => this.setState ({
      products: res
    }))
    getUsers()
      .then(res => this.setState ({
      users: res
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

  handleUpdateUser(id, name, bio){
    editUser(id, name, bio)
    .then( updatedUser => {
      const editedUser = this.state.users.map( user => {
        if (user.id === updatedUser.id ) {
          return updatedUser
        } else { return user }
        })
      this.setState({user: editedUser})
      }
      )
    }

  render() {
    // console.log('farmers: ', this.state.farmers)
    // console.log('farmer_products: ', this.state.farmer_products)
    // console.log('products: ', this.state.products)
    // debugger
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <GardenPage
          farmers={this.state.farmers}
          products={this.state.products}
          searchTerm={this.state.searchTerm}
          users={this.state.users}
          farmer_products={this.state.farmer_products}
          handleAddToCart={this.handleAddToCart.bind(this)}/>
      </div>
    )
  }
}
