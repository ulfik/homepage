function caloriesCalc (state = {}, action){
  switch (action.type){
    case 'SET_WEIGHT':
      return {
        weight: action.weight, 
        dogType: null, 
        factorValue: null
      };
    case 'SET_DOG_TYPE':
      return {
        weight: state.weight, 
        dogType: action.dogType, 
        factorValue: null
      };
    case 'SET_FACTOR':
      return {
        weight: state.weight, 
        dogType: state.dogType, 
        factorValue: action.factor
      };
    case 'RESET_CALC':
      return {
        weight: null, 
        dogType: null, 
        factorValue: null
      };
    default:
      return state;
  }
}

export default caloriesCalc;