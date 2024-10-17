import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantSelectionPage } from './restaurant-selection.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantSelectionPageRoutingModule {}
