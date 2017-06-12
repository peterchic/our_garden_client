// export function handleSignUp(){
//   // console.log(this.state.username);
//   axios({
//     method: 'post',
//     url: 'http://localhost:3000/api/v1/users',
//     data: {
//       name: this.state.name,
//       username: this.state.username,
//       password: this.state.password,
//       bio: this.state.bio,
//     }
//   }).then(res => console.log('res', res))
// }
import axios from 'axios'


export function getFarmers(){
  return fetch('http://localhost:3000/api/v1/farmers')
  .then(res => res.json())
}

export function getProducts(){
  return fetch('http://localhost:3000/api/v1/products')
  .then(res => res.json())
}

export function getUsers(){
  return fetch('http://localhost:3000/api/v1/users')
  .then(res => res.json())
}

export function getFarmerProducts(){
  return fetch('http://localhost:3000/api/v1/farmer_products')
  .then(res => res.json())
}

export function editUser(id, name, bio){
  console.log('editUser:', 'We made it!');
    return fetch(`http://localhost:3000/api/v1/users/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        watchlist: {
          name: name,
          bio: bio
        }
      })
    })
    .then( res => res.json())
  }

//   export function handleLogin(params){
//     return fetch("http://localhost:3000/api/v1/users", {
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     method: 'POST',
//     body: JSON.stringify(params)
//   }).then( res => res.json() )
// }


export function deleteUser(id){
  return fetch(`http://localhost:3000/api/v1/users/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}

// export function addToCart(quantity, farmer_product_id, cart_id){
//   console.log('rails', quantity, farmer_product_id, cart_id)
//     axios.post("http://localhost:3000/api/v1/product_carts", {
//       product_cart: {
//         quantity: quantity,
//         farmer_product_id: farmer_product_id,
//         cart_id: cart_id
//       }
//     }).then(res => console.log('error', res.data))
//   }
