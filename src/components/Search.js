import React from 'react'

const Search = (props) => {
  return (
    <div className="ui tiny icon input">
      <input
        type="text"
        placeholder={"Enter Your Zipcode!"}
        onChange={props.handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
