// import axios from 'axios'

export function getFarmers(){
  return fetch('http://localhost:3000/api/v1/farmers')
  .then(res => res.json())
}

export function getUsers(){
  return fetch('http://localhost:3000/api/v1/users')
  .then(res => res.json())
}

export function getReviews(){
  return fetch('http://localhost:3000/api/v1/reviews')
  .then(res => res.json())
}

export function getFarmerProducts(){
  return fetch('http://localhost:3000/api/v1/farmer_products')
  .then(res => res.json())
}

export function getProductCarts(){
  return fetch('http://localhost:3000/api/v1/product_carts')
  .then(res => res.json())
}

export function getCart(){
  return fetch('http://localhost:3000/api/v1/carts')
  .then(res => res.json())
}

export function decodeToken(params){
  console.log(params)
  return fetch(`http://localhost:3000/api/v1/decode_token`, {
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
  // console.log('rails', review, rating, user_id, farmer_id);
  return fetch("http://localhost:3000/api/v1/reviews", {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      // 'Authorization': sessionStorage.jwt
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
  console.log('update review going to rails', id, review, rating)
  return fetch(`http://localhost:3000/api/v1/reviews/${id}`, {
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
  // console.log('did I delete', id);
  return fetch(`http://localhost:3000/api/v1/reviews/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}
