import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToHomeMenuPage } from './to-home-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ToHomeMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToHomeMenuPageRoutingModule {}
