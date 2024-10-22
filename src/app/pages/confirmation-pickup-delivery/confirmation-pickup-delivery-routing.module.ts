import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPickupDeliveryPage } from './confirmation-pickup-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPickupDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPickupDeliveryPageRoutingModule {}
