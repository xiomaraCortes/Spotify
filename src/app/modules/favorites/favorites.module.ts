import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { FavoriteRoutingModule } from './favorites-routing.module';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }