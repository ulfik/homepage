import React from 'react';
import {
 Switch,
 Route
} from 'react-router-dom';

import Home from './pages/home/Home';
import AboutMe from './pages/aboutMe/AboutMe';
import Calculator from './pages/myWork/Calculator';
import FindMeal from './pages/myWork/FindMeal';
import Other from './pages/myWork/Other';
import Contact from './pages/contact/Contact';
import NotExists from './pages/NotExists';

class Content extends React.Component {
  render(){

    return <div className="jumbotron jumbotron-fluid">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/find-meal" component={FindMeal} />
            <Route path="/other" component={Other} />
            <Route path="/contact" component={Contact} />
            <Route component={NotExists} />
          </Switch>
        </div>
  }
};

export default Content;