import { Component, Input } from '@angular/core';
import { Recipe } from '../../../interfaces/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  @Input({ required: true }) recipe: Recipe | undefined;

  constructor(private router: Router) {}

  viewDetails(id: string | undefined) {
    this.router.navigate(['recipes', id], {
      queryParams: { chef: this.recipe?.chef?.name },
      fragment: 'recipe-detail'
    });
  }
}
