export interface Ingredient {
  name: string;
  unit: string;
  numberPerUnit: number;
  pricePerUnit: number;
}

export interface Chef {
  name: string;
  experience: string;
  avatar: string;
}

export interface Recipe {
  ingredients: Ingredient[];
  name: string;
  image: string;
  instructions: string[];
  prepTime: string;
  cookTime: string;
  difficulty: string;
  rate: number;
  chef: Chef;
  category: string;
  country: string;
}
