import React from 'react';
import CaloriesCalc from './caloriesCalc/CaloriesCalc'

class Calculator extends React.Component {
  render(){
    return <div className="contentSize app">
      <CaloriesCalc />
    </div>
  }
};

export default Calculator;