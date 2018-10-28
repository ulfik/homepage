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
 cheese: 'ser',
 ketchup: 'keczup',
 sausages: 'parówki',
 bacon: 'boczek',
 noodle: 'makaron',
 sourCream: 'śmietana'
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
    ingredients: [supplies.chicken, supplies.potatoes, supplies.breadCrumbs, supplies.oil, supplies.egg]
  }, 
  {
    name: 'kanapeczka',
    ingredients: [supplies.bread, supplies.butter, supplies.cheese]
  },
  {
    name: 'puree',
    ingredients: [supplies.potatoes, supplies.butter, supplies.milk]
  },
  {
    name: 'hot-dog',
    ingredients: [supplies.bread, supplies.ketchup, supplies.sausages]
  },
  {
    name: 'gotowana parówka',
    ingredients: [supplies.sausages, supplies.ketchup]
  },
  {
    name: 'kotlet z kurczaka',
    ingredients: [supplies.chicken, supplies.breadCrumbs, supplies.egg, supplies.oil]
  },
  {
    name: 'carbonara',
    ingredients: [supplies.bacon, supplies.sourCream, supplies.egg]
  },
  { 
    name: 'bekon z tostami',
    ingredients: [supplies.bacon, supplies.bread]
  },
  {
    name: 'jajko na bekonie',
    ingredients: [supplies.bacon, supplies.egg]
  },
  {
    name: 'tosty francuskie',
    ingredients: [supplies.egg, supplies.bread, supplies.oil]
  }
];



function findRecipe(selectedSupplies) {
  return recipies.filter(recipe => 
    recipe.ingredients.every(ingredient => selectedSupplies.includes(ingredient))
  );
}

export default {recipies, findRecipe, getSupplies};