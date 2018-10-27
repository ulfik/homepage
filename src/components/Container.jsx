import React from 'react';
import Navbar from './navbar/Navbar';
import Content from './Content';
import Footer from './footer/Footer';
import {
  BrowserRouter as Router
 } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);

class Container extends React.Component {
  render(){
    const model = this.props.model;
    return <Provider store={store}>
      <Router>
        <div>
        <Navbar navbar={model.common.navbar}/>
        <Content content={model.pages}/>
        <Footer footer={model.common.footer}/>
        </div>
      </Router>
    </Provider>
  }
};

export default Container;