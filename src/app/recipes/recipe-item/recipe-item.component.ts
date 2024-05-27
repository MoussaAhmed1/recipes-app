import { Component, Input } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss'
})
export class RecipeItemComponent {
@Input({ required: true }) recipe:Recipe|undefined ;



}
