function findMeal (state = [], action){
  switch (action.type){
    case 'ADD_INGREDIENT':
      return [...state, action.ingredient]
    case 'DELETE_INGREDIENT':
      const index = state.indexOf(action.ingredient);
      return [
        ...state.slice(0,index),
        ...state.slice(index + 1)
      ]
    default:
      return state;
  }
}

export default findMeal;