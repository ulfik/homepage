import React from 'react'
import FontAwesome from 'react-fontawesome';

class DictionarySearchHistoryItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteOnclick = this.deleteOnclick.bind(this);
  }

  deleteOnclick(){
    const pairOfWords = this.props.pairOfWords;
    const click = this.props.click;
    click(pairOfWords);
  }

  render(){
    const pairOfWords = this.props.pairOfWords;  

    return <li className="list-group-item list-group-item-light cursor" onClick={this.deleteOnclick}>
      <FontAwesome className='mr-2' name='pagelines' size='2x'/>
      {pairOfWords}
    </li>
  }
}

export default DictionarySearchHistoryItem;