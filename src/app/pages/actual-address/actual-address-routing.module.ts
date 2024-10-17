import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualAddressPage } from './actual-address.page';

const routes: Routes = [
  {
    path: '',
    component: ActualAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualAddressPageRoutingModule {}
