import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderDeliveredPage } from './order-delivered.page';

const routes: Routes = [
  {
    path: '',
    component: OrderDeliveredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderDeliveredPageRoutingModule {}
