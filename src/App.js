import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import OurGardenContainer from './containers/OurGardenContainer'
// import SignUp from './components/SignUp'
import NavBar from './components/NavBar'
import './App.css';

// import logo from './logo.svg';

export default () => {
  return (
    <div>
      <div className = "container-fluid">
        <NavBar title="OurGarden" color="black" />
        <Switch>
          {/* <Route path="/login" render={() => <LoginForm handleLogin={this.handleLogin}/> }/> */}
          <Route path='/gardens' component={OurGardenContainer} />
          <Route exact path="/about" render={() => <h1>This is an app about life!</h1>}/>
        </Switch>
        {/* <SignUp/> */}
      </div>
    </div>
  );
}
