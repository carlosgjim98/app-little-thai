import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderOnTheWayPage } from './order-on-the-way.page';

const routes: Routes = [
  {
    path: '',
    component: OrderOnTheWayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderOnTheWayPageRoutingModule {}
