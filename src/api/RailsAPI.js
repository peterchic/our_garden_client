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


export function deleteUser(id){
  return fetch(`http://localhost:3000/api/v1/users/${id}`, { method: 'DELETE'})
    .then( res => res.json() )
}
