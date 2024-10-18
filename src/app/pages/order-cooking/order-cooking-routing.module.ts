import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderCookingPage } from './order-cooking.page';

const routes: Routes = [
  {
    path: '',
    component: OrderCookingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderCookingPageRoutingModule {}
