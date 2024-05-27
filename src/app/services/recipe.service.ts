import { Injectable } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { resipes } from '../../assets/data/_recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = resipes;
  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
}
