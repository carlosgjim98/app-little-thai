import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlergenosPage } from './alergenos.page';

const routes: Routes = [
  {
    path: '',
    component: AlergenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlergenosPageRoutingModule {}
