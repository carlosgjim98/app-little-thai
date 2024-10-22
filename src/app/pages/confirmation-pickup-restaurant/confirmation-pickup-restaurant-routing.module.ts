import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmationPickupRestaurantPage } from './confirmation-pickup-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmationPickupRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmationPickupRestaurantPageRoutingModule {}
