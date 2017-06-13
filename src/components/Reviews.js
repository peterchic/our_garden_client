import React from 'react'
//Garden Show Render me

export default class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state={
      review: '',
      rating: '',
      user_id: 1,
      farmer_id: this.props.fp.id
    }
  }

  handleChange(e){
    this.setState({
      selectValue: e.target.value
    })
  }

  handleInputChange(event) {
    // console.log('event props', event.target.value);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const farmer_id = this.state.farmer_id
    this.setState({
      // review:
      [name]: value
    });
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.handleReview( this.state.review, this.state.rating, this.state.user_id, this.state.farmer_id )
    this.setState({
      review: ''
    })
  }

  render(){
    // console.log('review', this.props)
    return (
      <form>

        <label>
          Rating:
          <input name="rating" type="number" min="1" max="5" checked={this.state.rating} onChange={this.handleInputChange.bind(this)} />
        </label>


        <label>
          Leave A Review:
          <input name="review" type="textarea" value={this.state.review} onChange={this.handleInputChange.bind(this)} />
        </label>


        <input type="button" value="Add" onClick={this.handleSubmit.bind(this) } />
      </form>
    )
  }
}
