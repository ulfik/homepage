import React from 'react';
import CaloriesCalc from './caloriesCalc/CaloriesCalc'

class Calculator extends React.Component {
  render(){
    return <div>
      <p>Kalkulator dziennego zapotrzebowania kalorycznego dla psa.</p>
      <CaloriesCalc />
    </div>
  }
};

export default Calculator;