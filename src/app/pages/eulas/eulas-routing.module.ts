import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EulasPage } from './eulas.page';

const routes: Routes = [
  {
    path: '',
    component: EulasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EulasPageRoutingModule {}
