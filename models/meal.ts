class Meal {
  public id: string;
  public categoryIds: string[];
  public title: string;
  public affordability: string;
  public imageUrl: string;
  public duration: number;
  public ingredients: string[];
  public steps: string[];
  public isGlutenFree: boolean;
  public isVegan: boolean;
  public isVegetarian: boolean;
  public isLactoseFree: boolean;
  public complexity: string;
  constructor(
    id: string,
    categoryIds: string[],
    title: string,
    affordability: string,
    complexity: string,
    imageUrl: string,
    duration: number,
    ingredients: string[],
    steps: string[],
    isGlutenFree: boolean,
    isVegan: boolean,
    isVegetarian: boolean,
    isLactoseFree: boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isLactoseFree = isLactoseFree;
    this.isVegetarian = isVegetarian;
  }
}
export default Meal;
