import React from 'react';

class BadgeList extends React.Component{
  render(){
    const {badges} = this.props;
    return<div>
      {badges.map(element=><span class="badge badge-pill badge-light">{element}</span>)}
    </div>
  }
}


export default BadgeList;