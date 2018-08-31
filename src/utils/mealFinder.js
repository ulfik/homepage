const supplies = {
 chicken: 'pierś z kurczaka',
 egg: 'jajko',
 butter: 'masło',
 oil: 'olej',
 flour: 'mąka',
 milk: 'mleko',
 potatoes: 'pyrki',
 breadCrumbs: 'bułka tarta',
 bread: 'chleb',
 cheese: 'ser'
};

function getSupplies() {
  return Object.values(supplies);
}


const recipies = [
  {
    name: 'jajecznica',
    ingredients: [supplies.butter, supplies.egg]
  },
  {
    name: 'naleśniki',
    ingredients: [supplies.oil, supplies.egg, supplies.flour, supplies.milk]
  },
  {
    name: 'kluski',
    ingredients: [supplies.egg, supplies.flour, supplies.potatoes]
  },
  {
    name: 'pyrki z kurczakiem',
    ingredients: [supplies.chicken, supplies.potatoes, supplies.breadCrumbs, supplies.oil]
  }, {
    name: 'kanapeczka',
    ingredients: [supplies.bread, supplies.butter, supplies.cheese]
  }
];



function findRecipe(selectedSupplies) {
  return recipies.filter(recipe => 
    recipe.ingredients.every(ingredient => selectedSupplies.includes(ingredient))
  );
}

export default {recipies, findRecipe, getSupplies};