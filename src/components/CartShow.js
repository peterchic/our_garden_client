import React from 'react'
import { Card, Item, Icon } from 'semantic-ui-react'
// import { getUsers } from '../api/RailsAPI'


export default function CartShow (props){
  console.log('cartshow', props)
  // debugger

  if(props.current_user){
    if( props.current_user.products.length > 0){
      var products = props.product_carts.filter( function (product) {
        return product.cart_id === props.current_user.id
       })

       console.log('products are here', products)

      //  var items = products.map(function (prod) {
         var user = props.current_user.products.map( user => {
           return (
           <li>
             <Item.Group>
                 <Item>
                   <Item.Image size='tiny' src={user.picture} />

                   <Item.Content>
                     <Item.Header as='a'>{user.name}</Item.Header>
                     {/* <Item.Meta>Description</Item.Meta> */}
                     <Item.Description>
                       {user.description}
                       <Icon name='close' color='red' onClick={() => props.handleDeleteProduct(products.id)}/>
                     </Item.Description>
                     <Item.Extra> Quantity: {user.quantity}</Item.Extra>
                   </Item.Content>
                 </Item>
               </Item.Group>
           </li>
         )})


        return(
          <div>
            <ol>
              {user}
            </ol>
            <div>
              <h2>
                Total:
              </h2>

            </div>
          </div>
        )
    } else {
       console.log('first else' );
       return
       (<div>
        {null}
       </div>)
    }
  } else {
    console.log('second else');
    return
    (<div>
      {null}
    </div>)
  }
}
