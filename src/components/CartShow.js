import React from 'react'
import { Card, Item } from 'semantic-ui-react'
// import { getUsers } from '../api/RailsAPI'


export default function CartShow (props){
  console.log('cartshow', props)

  if(props.current_user.products){
    console.log('products are here', props.current_user.products)
    if( props.current_user.products.length > 0){
      const cart_quantity = props.product_carts.filter( product => {
        product.id === props.current_user.id
       })

       const names = props.current_user.products.map( item => {
         return(
           <li>
             <Item.Group>
                 <Item>
                   <Item.Image size='tiny' src={item.picture} />

                   <Item.Content>
                     <Item.Header as='a'>{item.name}</Item.Header>
                     {/* <Item.Meta>Description</Item.Meta> */}
                     <Item.Description>
                       {item.description}
                     </Item.Description>
                     <Item.Extra>{cart_quantity}</Item.Extra>
                   </Item.Content>
                 </Item>
               </Item.Group>
           </li>
         )
        })

        return(
          <div>
            <ol>
              {names}
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
    }
  } else {
    console.log('second else');
  }
}
