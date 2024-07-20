import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrl: './recipies-list.component.scss',
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipe[] | undefined;
  constructor(private recipeService: RecipeService) {}
  private recipesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.recipesSubscription = this.recipeService.recipes$.subscribe(
      (recipes:Recipe[]) => {
        console.log("recipes after adding new",recipes)
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.recipesSubscription) {
      console.log("destroy the connection")
      this.recipesSubscription.unsubscribe();
    }
  }
}
