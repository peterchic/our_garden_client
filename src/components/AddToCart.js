import React from 'react'

export default class AddToCart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      add: ''
    }
  }

  render(){
    return(
      <div>
        <button type='submit'>Add!</button>
      </div>
    )
  }
}
