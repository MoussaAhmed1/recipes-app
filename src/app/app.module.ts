import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RecipiesListComponent } from './recipes/recipies-list/recipies-list.component';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { HeroComponent } from './layout/hero/hero.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipiesListComponent,
    RecipeItemComponent,
    HeroComponent,
    RecipeDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
