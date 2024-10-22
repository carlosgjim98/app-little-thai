import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalsListPage } from './locals-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocalsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalsListPageRoutingModule {}
