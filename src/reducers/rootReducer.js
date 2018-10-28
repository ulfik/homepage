import { combineReducers } from "redux";
import caloriesCalcReducer from '../components/pages/myWork/caloriesCalc/reducers/caloriesCalcReducer';
import findMealReducer from '../components/pages/myWork/findMeal/reducers/findMealReducer';
import dictionaryReducer from '../components/pages/myWork/dictionary/reducers/dictionaryReducer';

const rootReducer = combineReducers({
  caloriesCalc: caloriesCalcReducer,
  findMeal: findMealReducer,
  dictionary: dictionaryReducer
})

export default rootReducer;