import React from 'react'
import { Card, Item, Icon } from 'semantic-ui-react'

export default function CartShow (props){
  console.log('cartshow', props)

  // let id = props.current_user.current_cart[product].pc_id
  // let price = props.current_user.current_cart[product].price
  // let quantity = props.current_user.current_cart[product].quantity
  // let picture = props.current_user.current_cart[product].info.picture
  // let description = props.current_user.current_cart[product].info.description

  function calcTotal(cart){
  var keys = Object.keys(cart)
  var total = 0
  for(var i=0; i< keys.length; i++){
    total += cart[keys[i]].price * cart[keys[i]].quantity
  }
  return total
}

// function itemTotal(cart){
// var keys = Object.keys(cart)
// var total = 0
// for(var i=0; i< keys.length; i++){
//   total += cart[keys[i]].price * cart[keys[i]].quantity
// }
// return total
// }

// console.log(calcTotal(props.current_user.current_cart))

//   let total = price.reduce(function(a,b){
//     return num + num),0}
// debugger
  if(!!props.current_user){
       var user = []
       for( let product in props.current_user.current_cart) {
         user.push(
         <li>
           <Item.Group>
             <Item>
               <Item.Image size='tiny' src={props.current_user.current_cart[product].info.picture} />

               <Item.Content>
                 <Item.Header as='a'>{product}</Item.Header>
                 {/* <Item.Meta>Description</Item.Meta> */}
                   <Item.Description>
                     {props.current_user.current_cart[product].info.description}
                     <Icon name='close' color='red' onClick={() => props.handleDeleteProduct(props.current_user.current_cart[product].pc_id)}/>
                   </Item.Description>
                     <Item.Extra>Quantity:]{props.current_user.current_cart[product].quantity}</Item.Extra>
                     <Item.Extra>Price: {props.current_user.current_cart[product].price}</Item.Extra>
                     <Item.Extra>Sum: ({props.current_user.current_cart[product].price}*{props.current_user.current_cart[product].quantity})</Item.Extra>

               </Item.Content>
             </Item>
           </Item.Group>
         </li>
       )
     }
      return(
        <div>
          <ol>
            {user}
          </ol>
          <div>
            <h2>
              Total: ${calcTotal(props.current_user.current_cart)}
            </h2>
          </div>
        </div>
      )
    }
    else {
     console.log('first else' );
     return (
       <div>
         {null}
       </div>)
    }

}
