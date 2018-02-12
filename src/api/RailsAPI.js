// const baseUrl = "https://our-garden-api.herokuapp.com"
const baseUrl = "http://localhost:3000"

export function getFarmers(){
  return fetch(`${baseUrl}farmers`)
  .then(res => res.json())
}

export function getUsers(){
  return fetch(`${baseUrl}users`)
  .then(res => res.json())
}

export function getReviews(){
  return fetch(`${baseUrl}reviews`)
  .then(res => res.json())
}

export function getFarmerProducts(){
  return fetch(`${baseUrl}farmer_products`)
  .then(res => res.json())
}

export function getProductCarts(){
  return fetch(`${baseUrl}product_carts`)
  .then(res => res.json())
}

export function getCart(){
  return fetch(`${baseUrl}carts`)
  .then(res => res.json())
}

export function decodeToken(params){
  return fetch(`${baseUrl}decode_token`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(params)
  })
  .then( res => res.json() )
}

export function createReview(review, rating, user_id, farmer_id){
  return fetch(`${baseUrl}reviews`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      review: {
        review: review,
        rating: rating,
        farmer_id: farmer_id,
        user_id: user_id
      }
    })
  })
    .then( res => res.json())
}

export function updateReview(id, review, rating) {
  return fetch(`${baseUrl}reviews/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        review: {
          review: review,
          rating: rating
        }
      })
    })
    .then( res => res.json())
  }

export function deleteReview(id){
  return fetch(`${baseUrl}reviews/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}

export function deleteProduct(id){
  return fetch(`${baseUrl}product_carts/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}

export function deleteUser(id){
  return fetch(`${baseUrl}users/${id}`, {
    method: 'DELETE',
  }).then( res => res.json() )
}

export function editUser(id, name, username, password, bio, picture){
  return fetch(`${baseUrl}users/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        name: name,
        username: username,
        password: password,
        bio: bio,
        picture: picture
      }
    })
  })
  .then(res => res.json() )
}
