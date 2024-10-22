import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPickupDeliveryPageRoutingModule } from './confirmation-pickup-delivery-routing.module';

import { ConfirmationPickupDeliveryPage } from './confirmation-pickup-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPickupDeliveryPageRoutingModule
  ],
  declarations: [ConfirmationPickupDeliveryPage]
})
export class ConfirmationPickupDeliveryPageModule {}
