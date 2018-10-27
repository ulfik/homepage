import React from 'react';
import { connect } from 'react-redux';
import caloriesCalcUtils from '../../../../utils/caloriesCalcUtils';
import TextInputComponent from '../../../common/TextInputComponent';
import OptionPickerComponent from '../../../common/OptionPickerComponent';
import caloriesActions from './actions/caloriesActions';


class CaloriesCalc extends React.Component {
  constructor(props) {
    super(props);

    this.setWeight = this.setWeight.bind(this);
    this.setDogTypes = this.setDogTypes.bind(this);
    this.setFactor = this.setFactor.bind(this);
    this.resetCalc = this.resetCalc.bind(this);
  }
 
  setWeight(weight) {
    this.props.setWeightActionCreator(weight);
  }

  setDogTypes(dogSubtypes) {
    this.props.setDogTypeActionCreator(dogSubtypes);
  }
  
  setFactor(factorValue) {
    this.props.setFactorActionCreator(factorValue);
  }

  resetCalc() {
    this.props.resetCalcAction();
  }

  render(){

    const {weight, dogSubtypes, factorValue} = this.props.caloriesCalc;

    return <div className='appContent'>
      <p className="display-4">Kalkulator dziennego zapotrzebowania kalorycznego dla psa.</p>
      <p className="lead">Wpisz wagę psa dla którego chcesz obliczyć dzienne zapotrzebowanie na kalorie.</p>
      <button className="btn btn-dark mb-3" onClick={this.resetCalc}>reset</button>
      <TextInputComponent type="number" placeholder="waga w kg" label="" value={weight} setValue={this.setWeight}/>
      
      {weight &&
        <div><p className="lead">Wybierz grupę do której zalicza się pies.</p>
        <OptionPickerComponent types={caloriesCalcUtils.dogTypes} setValue={this.setDogTypes}/></div>
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

function mapStateToProps(state){
  return {
    caloriesCalc: state.caloriesCalc

  };
}

const mapDispatchToProps = {
  setWeightActionCreator: (weight) => caloriesActions.setWeightActionCreator(weight),
  setDogTypeActionCreator: (dogSubtypes) => caloriesActions.setDogTypeActionCreator(dogSubtypes),
  setFactorActionCreator: (factorValue) => caloriesActions.setFactorActionCreator(factorValue),
  resetCalcAction: () => caloriesActions.resetCalcAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesCalc);