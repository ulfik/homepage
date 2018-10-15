function setWeightAction(weight) {
  return {
    type: 'SET_WEIGHT',
    weight
  }
}
function setDogTypeAction(dogType) {
  return {
    type: 'SET_DOG_TYPE',
    dogType
  }
}
function setFactorAction(factor) {
  return {
    type: 'SET_FACTOR',
    factor
  }
}

export default {
  setWeightAction,
  setDogTypeAction,
  setFactorAction
};;