import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPluginsPage } from './test-plugins.page';

const routes: Routes = [
  {
    path: '',
    component: TestPluginsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPluginsPageRoutingModule {}
