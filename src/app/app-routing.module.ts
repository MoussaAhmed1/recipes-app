import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesListComponent } from './recipes/recipies-list/recipies-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { RecipeInfoComponent } from './recipes/recipe-details/recipe-info/recipe-info.component';
import { RecipeIngredientsComponent } from './recipes/recipe-details/recipe-ingredients/recipe-ingredients.component';

const routes: Routes = [
  {path: '', component:RecipiesListComponent},
  {path: 'recipes/:name', component:RecipeDetailsComponent,
  children:[
    {path: 'info', component:RecipeInfoComponent},
    {path: 'ingredients', component:RecipeIngredientsComponent},
  ]},
  { path: '**', component: PageNotFoundComponent } //should be the last component 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
