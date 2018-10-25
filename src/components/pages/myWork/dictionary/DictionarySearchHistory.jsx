import React from 'react';
import DictionarySearchHistoryItem from './DictionarySearchHistoryItem';

class DictionarySearchHistory extends React.Component {
  render(){
    const searchHistory = this.props.searchHistory;
    const click = this.props.click;

    return <ul className="list-group">
    <p className="lead text-warning">Kliknij i wyciep te farmazony z hasioka</p>
      {searchHistory.map(pairOfWords=>
        <DictionarySearchHistoryItem key={pairOfWords} pairOfWords={pairOfWords} click={click}/>
      )}
    </ul>
  }
}

export default DictionarySearchHistory;