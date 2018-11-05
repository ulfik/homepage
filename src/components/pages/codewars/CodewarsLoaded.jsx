import React from 'react';
import FontAwesome from 'react-fontawesome';
import SvgBadge from './SvgBadge';

function CodewarsLoaded(props){
  const codeWarsData = props.codeWarsData;
  return<div>
    <FontAwesome
      className=''
      name='rocket'
      size='3x'
    />
    <div>Codewars stats:</div>
    <SvgBadge 
      userName={codeWarsData.username} 
      honor={codeWarsData.honor} 
      kyu={codeWarsData.ranks.overall.name}
    />
  </div>
}

export default CodewarsLoaded;