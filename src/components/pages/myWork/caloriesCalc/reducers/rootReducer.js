import { combineReducers } from "redux";
import caloriesCalcReducer from './caloriesCalcReducer';

const rootReducer = combineReducers({
  caloriesCalc: caloriesCalcReducer
})

export default rootReducer;