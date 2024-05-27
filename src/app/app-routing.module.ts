import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipiesListComponent } from './recipes/recipies-list/recipies-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:RecipiesListComponent},
  {path: 'recipes/:name', component:RecipeDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
