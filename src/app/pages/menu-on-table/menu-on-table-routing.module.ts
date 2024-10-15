import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuOnTablePage } from './menu-on-table.page';

const routes: Routes = [
  {
    path: '',
    component: MenuOnTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuOnTablePageRoutingModule {}
