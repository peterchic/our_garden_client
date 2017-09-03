import React from 'react'
import { Item, Icon, Button, Modal, Grid } from 'semantic-ui-react'

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
                 <Item.Description>
                   {props.current_user.current_cart[product].info.description}
                   <Button size="tiny" floated="right" color="gray" onClick={() => props.handleDeleteProduct(props.current_user.current_cart[product].pc_id)}>Remove</Button>
                 </Item.Description>
                 <Item.Extra>Quantity:{props.current_user.current_cart[product].quantity}</Item.Extra>
                 <Item.Extra>Price: {props.current_user.current_cart[product].price}</Item.Extra>

             </Item.Content>
           </Item>
         </Item.Group>
       </li>
     )
   }
    return (

      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>
            <Grid.Column width={10} id="cart-border">
        <ol>
          {user}
        </ol>
        <div>
          <h2>
            {Object.keys(props.current_user.current_cart)[0] ?
            <div>
              Total: ${calcTotal(props.current_user.current_cart)}
              <Modal
                trigger={<Button floated='right' color='orange'>Checkout!</Button>}
                header='Ready to Checkout...'
                content={`Clicking "Yes" will bring you to a separate checkout page and your card will be charged $${calcTotal(props.current_user.current_cart)}`}
                actions={[
                  { key: 'no', content: 'Go Back!', color: 'red', triggerClose: true },
                  { key: 'yes', content: 'Yes!', color: 'green', triggerClose: true },
                ]}
              />
            </div>
            :  <h1> Basket is empty. Grab some Produce and head back here to check out!</h1>}
          </h2>
        </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
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
     </div>
   )}
}
