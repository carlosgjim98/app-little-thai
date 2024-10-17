import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantSelectionPageRoutingModule } from './restaurant-selection-routing.module';

import { RestaurantSelectionPage } from './restaurant-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantSelectionPageRoutingModule
  ],
  declarations: [RestaurantSelectionPage]
})
export class RestaurantSelectionPageModule {}
