import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrl: './recipies-list.component.scss'
})
export class RecipiesListComponent implements OnInit {
  recipes: Recipe[] | undefined;
  constructor(private recipeService: RecipeService){

  }
  ngOnInit(): void {

    this.recipes = this.recipeService.getRecipes();
    
  }

}
