import mealFinder from './mealFinder';
describe('mealFinder', () => {
  test('getSupplies', () => {
    const result = mealFinder.getSupplies();
    
    expect(result.length).toBe(15);
  });

  test('should return empty list when find recipe without supplies', () => {
    const result = mealFinder.findRecipe([]) ;
    
    expect(result).toEqual([]);
  });

  
  test('should return empty list when find recipe with not enough supplies', () => {
    const result = mealFinder.findRecipe(['makaron', 'chleb']) ;
    
    expect(result).toEqual([]);
  });

  test('should return recipe when find recipe from supplies', () => {
    const result = mealFinder.findRecipe(['parówki', 'keczup']) ;
    
    expect(result[0].name).toBe('gotowana parówka');
  });

  test('should return two recipies when find recipe from supplies', () => {
    const result = mealFinder.findRecipe(['parówki', 'keczup', 'chleb']) ;
    
    expect(result[0].name).toBe('hot-dog');
    expect(result[1].name).toBe('gotowana parówka');
  });
});