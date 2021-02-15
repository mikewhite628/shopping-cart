import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './Routes';
import {HashRouter as Router} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
