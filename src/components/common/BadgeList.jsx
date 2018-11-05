import React from 'react';

function BadgeList(props){
  const {badges} = props;
  return<div>
    {badges.map(element=><span class="badge badge-pill badge-success">{element}</span>)}
  </div>
};

export default BadgeList;