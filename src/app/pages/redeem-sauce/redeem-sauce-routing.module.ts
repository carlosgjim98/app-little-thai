import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemSaucePage } from './redeem-sauce.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemSaucePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemSaucePageRoutingModule {}
