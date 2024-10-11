import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToHomePage } from './to-home.page';

const routes: Routes = [
  {
    path: '',
    component: ToHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToHomePageRoutingModule {}
