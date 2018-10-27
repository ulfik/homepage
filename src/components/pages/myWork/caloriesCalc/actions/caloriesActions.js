function setWeightActionCreator(weight) {
  return {
    type: 'SET_WEIGHT',
    weight
  }
}
function setDogTypeActionCreator(dogType) {
  return {
    type: 'SET_DOG_TYPE',
    dogType
  }
}
function setFactorActionCreator(factor) {
  return {
    type: 'SET_FACTOR',
    factor
  }
}
const resetCalcAction = {
  type: 'RESET_CALC'
}

export default {
  setWeightActionCreator,
  setDogTypeActionCreator,
  setFactorActionCreator,
  resetCalcAction
};