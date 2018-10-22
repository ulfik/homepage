import React from 'react';
import TextInputComponent from '../../../common/TextInputComponent';
import dictionaryUtils from '../../../../utils/dictionaryUtils';
import DictionarySearchHistory from './DictionarySearchHistory';
import FontAwesome from 'react-fontawesome';

class DictionaryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringToTranslate: '',
      translatedString: '',
      searchHistory: new Set()
    };
    this.handleClick = this.handleClick.bind(this);
    this.setStringToTranslate = this.setStringToTranslate.bind(this);
    this.deleteSearchHistoryElement = this.deleteSearchHistoryElement.bind(this);
  }

  setStringToTranslate(stringToTranslate) {
    this.setState({stringToTranslate});
  }

  handleClick(event) {
    if(this.state.stringToTranslate){
      const translatedString = dictionaryUtils.translateToDialect(this.state.stringToTranslate);
      this.state.searchHistory.add(this.state.stringToTranslate + ' - ' + translatedString);
      this.setState({
        translatedString
      })
    }
    event.preventDefault();
  }

  deleteSearchHistoryElement(deletedElement){
    this.state.searchHistory.delete(deletedElement);
    this.forceUpdate();
  }

  render(){
    return <div className='appContent'>
      <p className="display-4">Prosty słownik polsko-śląski. Godej po naszymu!</p>

      <div className="appDictionary">
        <TextInputComponent type='text' placeholder='wpisz tekst' setValue={this.setStringToTranslate}/>
      </div>
      <div className="appDictionary">
        <button className="btn btn-sm btn-dark" onClick={this.handleClick}> 
        przetłumacz <FontAwesome className='' name='angle-double-right' size='1x'/>
        </button> 
      </div>
      <div className="appDictionary appDictionaryOutput"> {!this.state.translatedString ? <p className='marginLeft text-muted'>...</p> : <p className='marginLeft'>{this.state.translatedString}</p>}</div>

      <p className="lead">Hasiok - historia wyszukiwań:</p>
     
      {(this.state.searchHistory.size === 0) ? <p className="lead text-success">Hasiok jes pusty :(</p> :  <DictionarySearchHistory click={this.deleteSearchHistoryElement} searchHistory={Array.from(this.state.searchHistory)}/>}

    </div>
  }
}

export default DictionaryApp;