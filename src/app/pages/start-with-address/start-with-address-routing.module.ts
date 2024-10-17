import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartWithAddressPage } from './start-with-address.page';

const routes: Routes = [
  {
    path: '',
    component: StartWithAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartWithAddressPageRoutingModule {}
