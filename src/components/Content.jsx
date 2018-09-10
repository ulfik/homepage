import React from 'react';
import {
 Switch,
 Route
} from 'react-router-dom';

import Home from './pages/home/Home';
import AboutMe from './pages/aboutMe/AboutMe';
import Calculator from './pages/myWork/Calculator';
import FindMeal from './pages/myWork/FindMeal';
import Codewars from './pages/codewars/Codewars';
import Contact from './pages/contact/Contact';
import NotExists from './pages/NotExists';

class Content extends React.Component {
  render(){

    return <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/work/calculator" component={Calculator} />
            <Route path="/work/find-meal" component={FindMeal} />
            <Route path="/codewars" component={Codewars} />
            <Route path="/contact" component={Contact} />
            <Route component={NotExists} />
          </Switch>
        </div>
  }
};

export default Content;