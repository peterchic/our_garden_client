import React from 'react'
import { Link } from 'react-router-dom'

const ProductShow = (props) => {
  console.log('Reached ProductShow');
  return (
    <div className="ui link card">
      <div className="image">
        <img src={props.product.picture}/>
      </div>
      <div className="content">
        <Link to={`/`} className='header'><h3>{props.product.name}</h3></Link>
        <div className='extra content'>
          <span className="right">Quantity: {props.fp[0].quantity}:</span>
        </div>
      </div>
      <div className="description">
        {props.product.description}
      </div>
      <button type='submit'>Add!</button>
    </div>
  )
}

export default ProductShow




{/* <Route exact path="/products/:id" render={ ({match}) => {
  const product = props.products.find(product => product.id === parseInt(match.params.id))
    return <ProductShow product={product}/>
} }/> */}

{/* <div>
  <li>{product.name}</li>
  <li>{product.description}</li>
  <li>{fp[0].quantity}</li>
  <img src={product.picture}/>

  <button type='submit'>Add!</button>
</div> */}
