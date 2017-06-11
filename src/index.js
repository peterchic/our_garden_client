import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import './stylesheets/index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
