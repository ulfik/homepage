import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Container from './components/Container';
import model from './model/model';


ReactDOM.render(
  <Container model={model}/>,
  document.getElementById('root')
);