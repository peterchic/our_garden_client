import React from 'react'
import { Card, Item, Icon } from 'semantic-ui-react'

export default function CartShow (props){
  console.log('cartshow', props)

  // componentWillReceiveProps(nextProps){
  //   this.setState({
  //     current_user: nextProps.current_user
  //   })
  // }

  function calcTotal(cart){
  var keys = Object.keys(cart)
  var total = 0
  for(var i=0; i< keys.length; i++){
    total += cart[keys[i]].price * cart[keys[i]].quantity
  }
  return total
}

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
                     <Item.Extra>Quantity:{props.current_user.current_cart[product].quantity}</Item.Extra>
                     <Item.Extra>Price: {props.current_user.current_cart[product].price}</Item.Extra>

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
