import React from 'react'
import { Card, Item, Icon } from 'semantic-ui-react'

export default function CartShow (props){
  console.log('cartshow', props)
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
                     <Icon name='close' color='red' onClick={() => props.handleDeleteProduct(props.current_user.current_cart[product].info.id)}/>
                   </Item.Description>
                 <Item.Extra> Quantity: {props.current_user.current_cart[product].quantity}</Item.Extra>
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
              Total:
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
