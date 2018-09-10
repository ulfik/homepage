import React from 'react';
import Navbar from './navbar/Navbar';
import Content from './Content';
import Footer from './footer/Footer';
import {
  BrowserRouter as Router
 } from 'react-router-dom';

class Container extends React.Component {
  render(){
    const model = this.props.model;
    return <Router>
      <div>
      <Navbar navbar={model.common.navbar}/>
      <Content content={model.pages}/>
      <Footer footer={model.common.footer}/>
      </div>
    </Router>
  }
};

export default Container;