import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.scss'
})
export class RecipeFormComponent {

  dateNow:Date = new Date();
  constructor(private recipeService:RecipeService){}
  onAddRecipe(recpieformValues:NgForm){
    console.log(recpieformValues?.value)
   const _recpieformValues = recpieformValues?.value as Recipe
    this.recipeService.onAddRecipe(_recpieformValues)
  }
}
