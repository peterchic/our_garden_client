// import React from 'react'
// import { Link } from 'react-router-dom'
// import ProductShow from './ProductShow'
//
// export default function GardenShow (props) {
//   console.log('props :', props);
//   debugger
//
//   const farm_products = props.farmer_products.map( item => {
//     return item
//   })
//
//
          // farmer.products.map(function(item){
          //   item.name, item.description
          //   farmer.farmer_products.filter( (f_p) => f_p.farmer_id === farmer.id && f_p.product_id === item.id).quantity
          // })
          //
          // const filtered = props.farmer.filter( prod => {
          //   // console.log('result prod.product_id: ', prod.product_id);
          //   const products = props.farmer.products.map( item => {
          //     // console.log('result products.id: ', item.id);
          //     return item.id
          //   })
          //   // console.log('products', products);
          //   return prod.product_id === products
          // })
//
//
//   const product = filtered.map( (product) => {
//     return <ProductShow product={product} />
//   })
//
//
//
//
//
//
//
//
//   if (!props.farmer_products) {
//     return (
//       <h1>Loading the Show Page</h1>
//     )
//   }
//   // console.log('product: ', props.farmer.products)
//   // console.log('product2: ', productName)
//   return (
//     <div>
//       <div>
//         <h1>{props.farmer_products.name}</h1>
//         <h1>{props.farmer_products.bio}</h1>
//         <img src={props.farmer.picture}/>
//
//         <div className="ui cards">
//           {product}
//         </div>
//       </div>
//
//
//     </div>
//   )
// }

import React from 'react'
import AddToCart from './AddToCart'

export default function GardenShow (props) {
  // debugger

  // const fp = props.farmer.farmer_products.map(fp => {
  //   console.log('quantity', fp.quantity)
  //   fp.quantity})
  // const all = fp.map(q => q)


//
    const products = props.farmer.products.map(product => {
    // console.log(fp)
    var fp = props.farmer.farmer_products.filter( (f_p) => f_p.farmer_id === props.farmer.id && f_p.product_id === product.id)
      // debugger
      return (
        <div>
          <li>{product.name}</li>
          <li>{product.description}</li>
          <li>{fp[0].quantity}</li>
          <img src={product.picture}/>

          <AddToCart handleAddToCart={props.handleAddToCart} />
        </div>
      )
  })

if (!props.farmer.products) {
    return (
      <h1>Loading the Show Page</h1>
      )
  }
  return (
    <div>
      <div>
        <h1>{props.farmer.name}</h1>
        <h1>{props.farmer.bio}</h1>
        <img src={props.farmer.picture}/>

        <div>
          <ul>{products}</ul>
        </div>
      </div>

    </div>
  )
}
