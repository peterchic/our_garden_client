import React from 'react'
// import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'


export default function CartShow(props){
  console.log('cartshow', props);





  var itemName = props.farmer_products.map( item =>
    <div>
      Item: {item.product.name} Price: {item.price}
      img: <img src={item.product.picture}/>
    </div>)
  // var cartTotal = props.farmer_products.map( (price) => {
  //   let item = item.price return item + item.price
  // )
  return(
    <div>
      <ol>
        Cart: {itemName} Price: {}
        {/* Total: {} */}
      </ol>
    </div>
  )
}
