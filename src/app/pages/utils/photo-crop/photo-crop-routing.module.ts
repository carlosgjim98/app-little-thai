import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoCropPage } from './photo-crop.page';

const routes: Routes = [
  {
    path: '',
    component: PhotoCropPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class PhotoCropPageRoutingModule {}
