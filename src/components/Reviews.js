import React from 'react'
//Garden Show Render me

export default class Reviews extends React.Component {
  constructor(props){
    super(props)
    this.state={
      review: '',
      rating: '',
      user_id: 1,
      farmer_id: props.farmer.id
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      farmer_id: nextProps.farmer.id
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
    this.props.handleReview( this.state.review, this.state.rating, this.state.user_id, this.state.farmer_id )
    this.setState({
      review: '',
      rating: ''
    })
    // this.state.review = ''
  }

  render(){
    // console.log('review', this.state.farmer_id)
    // debugger
    return (
      <form onSubmit={this.handleSubmit.bind(this) }>

        <label>
          Rating:
          <input name="rating" innertext='' type="number" min="1" max="5" onChange={this.handleInputChange.bind(this)} />

          Leave A Review:
          <input name="review" type="textarea" onChange={this.handleInputChange.bind(this)} />
        </label>


        <input type="submit" value="Leave A Review"/>

      </form>

    )
  }
}
