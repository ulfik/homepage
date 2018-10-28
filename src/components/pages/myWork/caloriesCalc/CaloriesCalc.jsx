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

  setDogTypes(element) {
    this.props.setDogTypeActionCreator(element.type);
  }
  
  setFactor(element) {
    this.props.setFactorActionCreator(element.value);
  }

  resetCalc() {
    this.props.resetCalcAction();
  }

  render(){

    const {weight, dogType, factorValue} = this.props;

    return <div className='appContent'>
      <p className="display-4">Kalkulator dziennego zapotrzebowania kalorycznego dla psa.</p>
      <p className="lead">Wpisz wagę psa dla którego chcesz obliczyć dzienne zapotrzebowanie na kalorie.</p>
      <button className="btn btn-dark mb-3" onClick={this.resetCalc}>reset</button>
      <TextInputComponent type="number" placeholder="waga w kg" label="" value={weight} setValue={this.setWeight}/>
      
      {weight &&
        <div><p className="lead">Wybierz grupę do której zalicza się pies.</p>
        <OptionPickerComponent types={caloriesCalcUtils.dogTypes} setElement={this.setDogTypes} value={dogType}/></div>
      }

      <div>
      {dogType &&
         <OptionPickerComponent types={caloriesCalcUtils.getDogSubTypes(dogType)} vertical={true} setElement={this.setFactor} />
      }
      </div>

      {weight && factorValue &&
      <div className="lead">Dzienne zapotrzebowanie dla Twojego psa to: {caloriesCalcUtils.calculateDER(weight, factorValue)} kcal:)</div>}
    
    </div>
  }
};

function mapStateToProps(state){
  return {
    ...state.caloriesCalc

  };
}

const mapDispatchToProps = {
  setWeightActionCreator: (weight) => caloriesActions.setWeightActionCreator(weight),
  setDogTypeActionCreator: (dogType) => caloriesActions.setDogTypeActionCreator(dogType),
  setFactorActionCreator: (factorValue) => caloriesActions.setFactorActionCreator(factorValue),
  resetCalcAction: () => caloriesActions.resetCalcAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CaloriesCalc);