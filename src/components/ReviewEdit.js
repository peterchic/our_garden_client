import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
// import { Switch, Route, Link, withRouter } from 'react-router-dom'

export default class ReviewEdit extends Component{
  constructor(){
    super()
    this.state = {
      review: '',
      rating: ''
    }
  }

    handleReviewInputChange(e){
      const review = e.target.value
      this.setState((state, props) => {
        return {
          review: review
        }
      })
    }
    handleRatingInputChange(e){
      const rating = e.target.value
      this.setState((state, props) => {
        return {
          rating: rating
        }
      })
    }

    handleSubmit(e){
      e.preventDefault()
      this.props.handleUpdateReview(this.props.reviews.id, this.state.review, this.state.rating)
    }

  render(){
    if (!this.props.reviews) {
      return null
    }
    console.log('reviewEdited', this.props)
    return(
      <div>
        <h2>Edit your Review</h2>
        <form>
          <div>
            <label>Review:</label>
            <input type='text' value={this.state.review} placeholder={this.props.reviews.review} onChange={this.handleReviewInputChange.bind(this)} />
            <label>Rating:</label>
            <input type="number" min="1" max="5" value={this.state.rating} placeholder={this.props.reviews.rating} onChange={this.handleRatingInputChange.bind(this)} />
            <Button color='green' size="tiny" type='submit' onClick={this.handleSubmit.bind(this)}>Save</Button>
          </div>
        </form>
  </div>
    )
  }

}
