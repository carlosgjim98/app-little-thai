import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPickupPageRoutingModule } from './restaurant-pickup-routing.module';

import { RestaurantPickupPage } from './restaurant-pickup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPickupPageRoutingModule
  ],
  declarations: [RestaurantPickupPage]
})
export class RestaurantPickupPageModule {}
