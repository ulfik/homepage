import React from 'react';
import caloriesCalcUtils from '../../../../utils/caloriesCalcUtils';
import TextInputComponent from '../../../common/TextInputComponent';
import OptionPickerComponent from '../../../common/OptionPickerComponent';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import actionCreators from './actions/caloriesActionCreators'

class CaloriesCalc extends React.Component {
  constructor(props) {
    super(props);

    this.setWeight = this.setWeight.bind(this);
    this.setDogTypes = this.setDogTypes.bind(this);
    this.setFactor = this.setFactor.bind(this);

    this.forceUpdate = this.forceUpdate.bind(this);

    this.store = createStore(rootReducer);
    this.store.subscribe(this.forceUpdate);
  }
 
  setWeight(weight) {
    this.store.dispatch(actionCreators.setWeightAction(weight));
  }

  setDogTypes(dogSubtypes) {
    this.store.dispatch(actionCreators.setDogTypeAction(dogSubtypes));
  }
  
  setFactor(factorValue) {
    this.store.dispatch(actionCreators.setFactorAction(factorValue));
  }

  render(){

    const {caloriesCalc: {weight, dogSubtypes, factorValue}} = this.store.getState();

    return <div className='appContent'>
      <p className="display-4">Kalkulator dziennego zapotrzebowania kalorycznego dla psa.</p>
      <p className="lead">Wpisz wagę psa dla którego chcesz obliczyć dzienne zapotrzebowanie na kalorie.</p>
      <TextInputComponent placeholder="waga w kg" label="" setValue={this.setWeight}/>
      
      {weight &&
        <div><p className="lead">Wybierz grupę do której zalicza się pies.</p>
        <OptionPickerComponent types={caloriesCalcUtils.dogTypes}  setValue={this.setDogTypes}/></div>
      }

      <div>
      {dogSubtypes &&
         <OptionPickerComponent types={dogSubtypes} vertical={true} setValue={this.setFactor}/>
      }
      </div>

      {weight && factorValue &&
      <div className="lead">Dzienne zapotrzebowanie dla Twojego psa to: {caloriesCalcUtils.calculateDER(weight, factorValue)} kcal:)</div>}
    

    </div>
  }
};

export default CaloriesCalc;