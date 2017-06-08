import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { editUser, getFarmers, getProducts, getUsers } from '../api/RailsAPI'
import GardenPage from '../components/GardenPage'
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
      searchTerm: ''

    }
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
    console.log('farmers: ', this.state.history)
    // debugger
    return (
      <div>
        <GardenPage
          farmers={this.state.farmers}
          products={this.state.products}
          searchTerm={this.state.searchTerm}
          users={this.state.users}/>
      </div>
    )
  }
}
