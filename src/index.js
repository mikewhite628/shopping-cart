import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './Routes';
import {HashRouter as Router} from 'react-router-dom'
import Home from './Components/Home/Home';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
