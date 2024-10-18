import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantPickupPage } from './restaurant-pickup.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPickupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPickupPageRoutingModule {}
