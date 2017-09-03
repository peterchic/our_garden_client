import React from 'react'
//Garden Show Renders me
import { Grid, Form, Input, Divider } from 'semantic-ui-react'


export default class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state={
      review: '',
      rating: '',
      user_id: props.current_user.id,
      farmer_id: props.farmer.id
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      farmer_id: nextProps.farmer.id,
      user_id: nextProps.current_user.id
    })
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleReview(
      this.state.review,
      this.state.rating,
      this.state.user_id,
      this.state.farmer_id
    )
    this.setState({
      review: '',
      rating: ''
    })
  }

  render(){
    // console.log('review', this.props)
    return (
      <div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <Form.Group>
              <Form.Input
                id='form-input-contorl-rating'
                control={Input}
                // label='Rating'
                placeholder='5'
                value={this.state.rating}
                name="rating"
                type="number" min="1" max="5"
                onChange={this.handleInputChange.bind(this)}/>
              <Form.Input
                id='form-input-contorl-review'
                control={Input}
                // label='Review'
                placeholder='Review'
                value={this.state.review}
                name="review"
                type="textarea"
                onChange={this.handleInputChange.bind(this)}/>
              <Form.Button color='orange' type="submit" value="Leave A Review">Leave a Review!</Form.Button>
            </Form.Group>
          </Form>
          <Grid>
              <Grid.Column width={13}>
                <Divider></Divider>
              </Grid.Column>
          </Grid>

      </div>
    )
  }
}
