import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetUpAccountPage } from './set-up-account.page';

const routes: Routes = [
  {
    path: '',
    component: SetUpAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetUpAccountPageRoutingModule {}
