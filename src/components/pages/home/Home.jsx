import React from 'react';
import homeModel from '../../../model/homeModel';

class Home extends React.Component {
  render(){
    return <div>
      <div className="text-center display-4">{homeModel.title}</div>
      <div className="text-center lead">{homeModel.subtitle}</div>
    </div>
  }
};

export default Home;