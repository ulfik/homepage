import {Set} from 'immutable';
import dictionaryUtils from '../../../../../utils/dictionaryUtils';

const initialState = {
  stringToTranslate: '',
  translatedString: '',
  searchHistory: new Set()
};

function dictionary(state=initialState, action){
  switch (action.type){
    case 'TRANSLATE':
      const translatedString = dictionaryUtils.translateToDialect(action.stringToTranslate);
      return {
        stringToTranslate: action.stringToTranslate,
        translatedString,
        searchHistory: state.searchHistory.add( `${action.stringToTranslate} - ${translatedString}`)
      };
    case 'DELETE':
      return {
        ...state,
        searchHistory: state.searchHistory.delete(action.deletedElement)
      }
    default:
      return state;
  }
}

export default dictionary;