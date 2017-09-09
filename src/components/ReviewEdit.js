import React, { Component } from 'react'
import { Button, Grid, Form, Input } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class ReviewEdit extends Component{
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
    this.props.handleUpdateReview(
      this.props.reviews.id,
      this.state.review,
      this.state.rating)
  }

  handleCancel(e){
    e.preventDefault()
    this.props.history.push(`/farmers/${this.props.farmer.id}`)
  }

  render(){
    if (!this.props.reviews) {
      return null
    }
    return(
      <Grid>
      <Grid.Column width={13}>
      <div className="review-edit">
        <h2>Edit your Review</h2>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Review' type='text' value={this.state.review} placeholder={this.props.reviews.review} onChange={this.handleReviewInputChange.bind(this)}/>
            <Form.Field control={Input} type="number" max={5} label='Rating' value={this.state.rating} placeholder={this.props.reviews.rating} onChange={this.handleRatingInputChange.bind(this)}/>
          </Form.Group>
          <div id="review-two-buttons">
            <Form.Field id="review-two-buttons" color="grey" control={Button} content='Cancel' onClick={this.handleCancel.bind(this)}
            />
            <Form.Field id="review-two-buttons" color="orange" control={Button} content='Save' onClick={this.handleSubmit.bind(this)}
            />
          </div>
        </Form>
  </div>
</Grid.Column>
</Grid>
    )
  }
}

export default withRouter(ReviewEdit)
