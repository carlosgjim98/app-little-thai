import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThaiPointsPage } from './thai-points.page';

const routes: Routes = [
  {
    path: '',
    component: ThaiPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThaiPointsPageRoutingModule {}
