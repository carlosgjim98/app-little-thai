import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPickupRestaurantPageRoutingModule } from './confirmation-pickup-restaurant-routing.module';

import { ConfirmationPickupRestaurantPage } from './confirmation-pickup-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPickupRestaurantPageRoutingModule
  ],
  declarations: [ConfirmationPickupRestaurantPage]
})
export class ConfirmationPickupRestaurantPageModule {}
