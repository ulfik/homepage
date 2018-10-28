import React from 'react';
import { connect } from 'react-redux';
import TextInputComponent from '../../../common/TextInputComponent';
import DictionarySearchHistory from './DictionarySearchHistory';
import FontAwesome from 'react-fontawesome';
import dictionaryActions from './actions/dictionaryActions';

class DictionaryApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.setInputText = this.setInputText.bind(this);
    this.deleteSearchHistoryElement = this.deleteSearchHistoryElement.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.translate = this.translate.bind(this);
  }

  setInputText(inputText) {
    this.setState({inputText});
  }

  translate() {
    if(this.state.inputText){
      //const translatedString = dictionaryUtils.translateToDialect(this.state.stringToTranslate);
      //this.state.searchHistory.add(this.state.stringToTranslate + ' - ' + translatedString);
      this.props.translateActionCreator(this.state.inputText);
      //this.setState({
        //translatedString
      //})
    }
  }

  handleClick() {
    this.translate()
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.translate();
    }
  }

  deleteSearchHistoryElement(deletedElement){
    this.props.deleteActionCreator(deletedElement)
   // this.state.searchHistory.delete(deletedElement);
    //this.forceUpdate();
  }

  render(){
    const {searchHistory, translatedString} = this.props;

    return <div className='appContent'>
      <p className="display-4">Prosty słownik polsko-śląski. Godej po naszymu!</p>

      <div className="appDictionary">
        <TextInputComponent type='text' placeholder='wpisz tekst' setValue={this.setInputText} onKeyPress={this.handleKeyPress}/>
      </div>
      <div className="appDictionary">
        <button className="btn btn-sm btn-dark" onClick={this.handleClick}> 
          przetłumacz  <FontAwesome className='' name='angle-double-right' size='lg'/>
        </button> 
      </div>
      <div className="appDictionary appDictionaryOutput"> {!translatedString ? <p className='marginLeft text-muted'>...</p> : <p className='marginLeft'>{translatedString}</p>}</div>

      <p className="lead">Hasiok - historia wyszukiwań:</p>
     
      {(searchHistory.size === 0) ? <p className="lead text-warning">Hasiok jes pusty :(</p> :  <DictionarySearchHistory click={this.deleteSearchHistoryElement} searchHistory={Array.from(searchHistory)}/>}

    </div>
  }
}

function mapStateToProps(state){
  return{
    stringToTranslate: state.dictionary.stringToTranslate,
    translatedString: state.dictionary.translatedString,
    searchHistory: state.dictionary.searchHistory
  }
}

const mapDispatchToProps = {
  translateActionCreator: (stringToTranslate) => dictionaryActions.translateActionCreator(stringToTranslate),
  deleteActionCreator: (deletedElement) => dictionaryActions.deleteActionCreator(deletedElement)
}
export default connect(mapStateToProps, mapDispatchToProps)(DictionaryApp);