import { Injectable } from '@angular/core';
import { Recipe } from '../../interfaces/recipe';
import { resipes } from '../../assets/data/_recipes';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = resipes;
  private recipesSubject = new BehaviorSubject<Recipe[]>([]);
  recipes$ = this.recipesSubject.asObservable();

  constructor() {
    // Initialize with some recipes if needed
    const initialRecipes: Recipe[] = resipes;
    this.recipesSubject.next(initialRecipes);
  }

  getRecipes() {
    return this.recipesSubject.value;
  }

  
  onAddRecipe(newRecipe:Recipe){
    const currentRecipes = this.recipesSubject.value;
    this.recipesSubject.next([...currentRecipes, newRecipe]);
  }
}
