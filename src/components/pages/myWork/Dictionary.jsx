import React from 'react';
import DictionaryApp from './dictionary/DictionaryApp';

class Dictionary extends React.Component {
  render(){
    return <div className="contentSize app">
      <DictionaryApp/>
    </div>
  }
};


export default Dictionary;