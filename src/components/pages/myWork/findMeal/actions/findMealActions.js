function addIngredient(ingredient){
  return {
    type: 'ADD_INGREDIENT',
    ingredient
  }
}

function deleteIngredient(ingredient){
  return {
    type: 'DELETE_INGREDIENT',
    ingredient
  }  
}

export default {addIngredient, deleteIngredient};