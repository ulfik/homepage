import { combineReducers } from "redux";
import caloriesCalcReducer from '../components/pages/myWork/caloriesCalc/reducers/caloriesCalcReducer';

const rootReducer = combineReducers({
  caloriesCalc: caloriesCalcReducer
})

export default rootReducer;