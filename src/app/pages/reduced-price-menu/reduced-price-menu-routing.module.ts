import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReducedPriceMenuPage } from './reduced-price-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ReducedPriceMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReducedPriceMenuPageRoutingModule {}
