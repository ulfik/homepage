import React from 'react';
import homeModel from '../../../model/homeModel';
import Icons from "../../common/Icons"

function Home(){
  return <div className="homePage contentSize">
    <div className="display-4 homePageText">{homeModel.title}</div>
    <div className="lead">{homeModel.subtitle}</div>
    <div className='mt-4'><Icons /></div>
    <span></span>
  </div>
};

export default Home;