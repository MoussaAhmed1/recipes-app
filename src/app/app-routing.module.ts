import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesListComponent } from './recipes/recipies-list/recipies-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { RecipeInfoComponent } from './recipes/recipe-details/recipe-info/recipe-info.component';
import { RecipeIngredientsComponent } from './recipes/recipe-details/recipe-ingredients/recipe-ingredients.component';
import { authChildGuards, authGuards } from '../core/guards/auth-guards.service';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';

const routes: Routes = [
  { path: '',redirectTo:"recipes",pathMatch:"full" },
  { path: 'recipes', component: RecipiesListComponent },
  { path: 'recipe-form', component: RecipeFormComponent },
  {
    path: 'recipes/:name',
    component: RecipeDetailsComponent,
    canActivate: [authGuards],
    canActivateChild:[authChildGuards],
    children: [
      { path: 'info', component: RecipeInfoComponent },
      { path: 'ingredients', component: RecipeIngredientsComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent,data:{message:"Sorry, we couldn’t find the page you’re looking for."} }, //should be the last component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
