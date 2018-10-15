function caloriesCalc (state = {}, action){
  switch (action.type){
    case 'SET_WEIGHT':
      return {weight: action.weight, dogSubtypes: null, factorValue: null};
    case 'SET_DOG_TYPE':
      return {weight: state.weight, dogSubtypes: action.dogType, factorValue: null};
    case 'SET_FACTOR':
      return {weight: state.weight, dogSubtypes: state.dogSubtypes, factorValue: action.factor};
    default:
      return state;
  }
}

export default caloriesCalc;