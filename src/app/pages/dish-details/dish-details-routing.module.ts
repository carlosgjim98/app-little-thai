import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DishDetailsPage } from './dish-details.page';

const routes: Routes = [
  {
    path: '',
    component: DishDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DishDetailsPageRoutingModule {}
