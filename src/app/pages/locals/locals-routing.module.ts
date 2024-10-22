import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalsPage } from './locals.page';

const routes: Routes = [
  {
    path: '',
    component: LocalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalsPageRoutingModule {}
