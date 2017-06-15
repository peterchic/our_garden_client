import React from 'react'
import { getUsers, getProductCarts } from '../api/RailsAPI'


function Account() {
  // constructor(){
  //   super()
  //   this.state ={
  //     user: [],
  //     product_carts: []
  //   }
  //
  // }
  // console.log('account!!!!!', props);

  // componentDidMount() {
  //   getUsers()
  //     .then(res => this.setState ({
  //     users: res.filter( user => user.username !== localStorage.username)
  //   }))
  //
  //   getProductCarts()
  //     .then(res => this.setState ({
  //     product_carts: res
  //   }))
  // }


  // render(){
  //   console.log('reached account page', this.state);
    return(
      <div>
        {/* <p>{this.state.user}</p> */}
        <h1>THIS IS THE ACCOUNT PAGE</h1>
      </div>
    )
  // }
}

export default Account
