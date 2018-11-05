import React from 'react';
import FontAwesome from 'react-fontawesome';
import SvgBadge from './SvgBadge';
import AnimatedDots from '../../common/AnimatedDots';

function CodewarsLoading(){
  return <div> 
    <FontAwesome
      className=''
      name='rocket'
      size='3x'
      spin
    />
    <div>Loading stats from codewars server <AnimatedDots /></div>

    <SvgBadge 
      userName={"???"} 
      honor={"???"} 
      kyu={"???"}
    />
    <div className="list-group marginBottom">
      {[1,2,3,4,5,6].map(x=><li key={x} className="list-group-item font-weight-bold"><AnimatedDots /></li>)}
    </div> 
  </div>
};

export default CodewarsLoading;