import React from 'react';
import FontAwesome from 'react-fontawesome';

class DictionarySearchHistory extends React.Component {
  render(){
    const searchHistory = this.props.searchHistory
    return <ul className="list-group">
     {searchHistory.map(pairOfWords=><li className="list-group-item list-group-item-light" key={pairOfWords}>
        <FontAwesome className='mr-2' name='pagelines' size='2x'/>
        {pairOfWords}
      </li>)}
    </ul>
  }
}

export default DictionarySearchHistory;