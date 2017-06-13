import axios from 'axios'

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

export function deleteUser(id){
  return fetch(`http://localhost:3000/api/v1/users/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}
