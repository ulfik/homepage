import React from 'react';
import DictionarySearchHistoryItem from './DictionarySearchHistoryItem';

function DictionarySearchHistory(props){
  const searchHistory = props.searchHistory;
  const click = props.click;

  return <ul className="list-group">
    <p className="lead text-warning">Kliknij i wyciep te farmazony z hasioka</p>
    {searchHistory.map(pairOfWords=>
      <DictionarySearchHistoryItem key={pairOfWords} pairOfWords={pairOfWords} click={click}/>
    )}
  </ul>
}

export default DictionarySearchHistory;