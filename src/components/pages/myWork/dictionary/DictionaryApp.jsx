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

  render(){
    return <div className='appContent'>
      <p className="display-4">Prosty słownik polsko-śląski. Godej po naszymu!</p>

      <div className="appDictionary"><TextInputComponent type='text' placeholder='wpisz tekst' setValue={this.setStringToTranslate}/></div>
      <div className="appDictionary">
        <button className="btn btn-sm btn-dark" onClick={this.handleClick}> 
          <FontAwesome className='' name='exchange' size='1x'/> przetłumacz
        </button> 
      </div>
      <div className="appDictionary lead"> {this.state.translatedString}</div>

      <p className="lead">historia wyszukiwań:</p>

      {(this.state.searchHistory.size === 0) ? <p className="lead">hasiok jes pusty :(</p> : <DictionarySearchHistory searchHistory={Array.from(this.state.searchHistory)}/>}

    </div>
  }
}

export default DictionaryApp;