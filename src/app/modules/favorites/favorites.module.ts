import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { FavoriteRoutingModule } from './favorites-routing.module';




@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule
  ]
})
export class FavoritesModule { }