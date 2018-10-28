import React from 'react';
import { connect } from 'react-redux';
import mealFinder from '../../../../utils/mealFinder'
import MultiOptionPickerComponent from '../../../common/MultiOptionPickerComponet';
import BadgeList from '../../../common/BadgeList';
import findMealActions from './actions/findMealActions'

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
    const {foodInFridge} = this.props;
    const meals = mealFinder.findRecipe(foodInFridge);
    
    return <div className='appContent'>
      <p className="display-4">Wybierz składniki aby znaleźć przepis.</p>
      
      <MultiOptionPickerComponent 
        addElement = {this.props.addIngredient}
        deleteElement = {this.props.deleteIngredient}
        supplies={mealFinder.getSupplies()} 
        selectedList={foodInFridge}
      />
      
      {foodInFridge && meals.length === 0 && <div className="lead mt-2">Brak składników do przyrządzenia potraw - dzwoń po pizzę... </div>}

      {foodInFridge &&
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
function mapStateToProps(state){
  return {
    foodInFridge: state.findMeal
  };
}

const mapDispatchToProps = {
  addIngredient: (ingredient) => findMealActions.addIngredient(ingredient),
  deleteIngredient: (ingredient) => findMealActions.deleteIngredient(ingredient)
}

export default connect(mapStateToProps, mapDispatchToProps)(FindMealApp);