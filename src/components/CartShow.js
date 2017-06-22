import React from 'react'
import { Card, Item, Icon, Button, Modal } from 'semantic-ui-react'

export default function CartShow (props){
  console.log('cartshow', props)

  function calcTotal(cart){
    var keys = Object.keys(cart)
    var total = 0
      for(var i=0; i< keys.length; i++){
        total += cart[keys[i]].price * cart[keys[i]].quantity
      }
    return total
  }

  function empty(cart){
    var keys = Object.keys(cart)
    var total = 0
      for(var i=0; i< keys.length; i++){
        total += cart[keys[i]].price * cart[keys[i]].quantity
      }
    return total
  }

// debugger
  if(!!props.current_user && !!props.current_user.current_cart){
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
            <div>
              Total: ${calcTotal(props.current_user.current_cart)}
              <Modal
                trigger={<Button floated='right' color='orange'>Checkout!</Button>}
                header='Ready to Checkout...'
                content={`Clicking "Yes" will bring you to a separate checkout page and you\'re card will be charged ${calcTotal(props.current_user.current_cart)}`}
                actions={[
                  { key: 'no', content: 'Go Back!', color: 'red', triggerClose: true },
                  { key: 'yes', content: 'Yes!', color: 'green', triggerClose: true },
                ]}
              />
            </div>
          </h2>
        </div>
      </div>
    )
  }
  else {
   console.log('cart else');
   return (
     <div>
       <h2>
         Hey! Grab some fresh produce and head back here to checkout!
       </h2>
     </div>)
   }
}
