import React from 'react';
import caloriesCalcUtils from '../../../../utils/caloriesCalcUtils';
import TextInputComponent from '../../../common/TextInputComponent';
import OptionPickerComponent from '../../../common/OptionPickerComponent';
class CaloriesCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: null,
      dogSubtypes: null,
      factorValue: null
    };
    this.setWeight = this.setWeight.bind(this);
    this.setDogTypes = this.setDogTypes.bind(this);
    this.setFactor = this.setFactor.bind(this);
  }
 
  setWeight(weight) {
    this.setState({weight});
  }

  setDogTypes(dogSubtypes) {
    this.setState({dogSubtypes});
  }
  setFactor(factorValue) {
    this.setState({factorValue});
  }

  render(){
    return <div className='appContent'>
      <p className="display-4">Kalkulator dziennego zapotrzebowania kalorycznego dla psa.</p>
      <p className="lead">Wpisz wagę psa dla którego chcesz obliczyć dzienne zapotrzebowanie na kalorie.</p>
      <TextInputComponent placeholder="waga w kg" label="" setValue={this.setWeight}/>
      
      {this.state.weight &&
        <div><p className="lead">Wybierz grupę do której zalicza się pies.</p>
        <OptionPickerComponent types={caloriesCalcUtils.dogTypes}  setValue={this.setDogTypes}/></div>
      }

      <div>
      {this.state.dogSubtypes &&
         <OptionPickerComponent types={this.state.dogSubtypes} vertical={true} setValue={this.setFactor}/>
      }
      </div>

      {this.state.weight && this.state.factorValue &&
      <div className="lead">Dzienne zapotrzebowanie dla Twojego psa to: {caloriesCalcUtils.calculateDER(this.state.weight, this.state.factorValue)} kcal:)</div>}
    

    </div>
  }
};

export default CaloriesCalc;