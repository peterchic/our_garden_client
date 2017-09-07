import React from 'react';
import OurGardenContainer from './containers/OurGardenContainer'

import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <div className = "container-fluid">
          <OurGardenContainer />
        </div>
      </div>
    )
  }
}

export default App
