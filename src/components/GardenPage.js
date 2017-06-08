import React from 'react'
import { Link } from 'react-router-dom'

export default function GardenPage(props){
  const farmersElements = props.farmers.map((farmer,i) =>
    <div key={farmer.id}>
      <Link to={`/farmers/${farmer.id}`}><h3>{farmer.name}</h3></Link>
    </div>)

    // console.log('ok', userElements)
    return (
      <div>
        <div className='col-md-4'>
          <ul>
            { farmersElements }
          </ul>
        </div>
      </div>
  )

}
