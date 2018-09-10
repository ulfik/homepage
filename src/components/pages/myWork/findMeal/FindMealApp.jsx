import React from 'react';
import mealFinder from '../../../../utils/mealFinder'
import MultiOptionPickerComponent from '../../../common/MultiOptionPickerComponet';
import BadgeList from '../../../common/BadgeList';

class FindMealApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {foodInFridge: []}

    this.setFoodInFridge = this.setFoodInFridge.bind(this);
  }

  setFoodInFridge(foodInFridge){
    this.setState({foodInFridge})
  }


  render(){
    const meals = mealFinder.findRecipe(this.state.foodInFridge);
    return <div className='appContent'>
      <p className="display-4">Wybierz składniki aby znaleźć przepis.</p>
      <MultiOptionPickerComponent 
        type={mealFinder.getSupplies()} 
        setIngrediends={this.setFoodInFridge}
      />
      
      {this.state.foodInFridge && meals.length === 0 && <div>Brak składników do przyrządzenia potraw :(</div>}

      {this.state.foodInFridge &&
        <div className="list-group list-group-flush">
          {meals.map(element=>
            <li className="list-group-item font-weight-bold  mealText" key={element.name}>
              {element.name}
              <BadgeList badges={element.ingredients} />
            </li>
          )}
        </div>
      }
    </div>
  }
}

export default FindMealApp;