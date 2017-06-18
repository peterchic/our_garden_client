import React from 'react'
// import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'


export default function CartShow(props){
  console.log('cartshow', props);
  // debugger




  var cart = props.current_cart.filter( cart => {
    cart.cart_id === props.current_user.id
  })
  // Array of 7 objects
      // cart_id: 30
      // farmer_product_id:8
      // id:14
      // quantity:1

// var totalItems = qq.reduce((a,b) => {
//     return a+b }, 0)


  const theUser = props.current_user.id

  var cartQuantity = cart.map( item => item.quantity).reduce(function(a,b){
    return a + b }, 0)
    // 12 = Total quantity of purchased items from array above





  // var price = props.farmer_products.filter( fp => {
  //   fp.id === props.current_cart.farmer_product_id })
  //
  //   cart.filter( item =>  item.farmer_product_id === fp.id)
  // })

  // let price = cart.filter(item => item.farmer_product_id === props.farmer_product.price)



// let integers = prices.map(Number)

// let total = integers.reduce( function(a,b) {
// return a + b }, 0 )


  var itemName = props.farmer_products.map( item =>
    <div>
      Item: {item.product.name} Price: {item.price}
      <img src={item.product.picture}/>
    </div>)


  return(
    <div>
      <h1>Your List:</h1>
      <ol>
        {cart}
      </ol>
      <h2>Total: {cartQuantity} items</h2>
    </div>
  )
}
