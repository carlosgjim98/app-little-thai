import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoCropPageRoutingModule } from './photo-crop-routing.module';

import { PhotoCropPage } from './photo-crop.page';
import { ImageCropperComponent } from 'ngx-image-cropper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoCropPageRoutingModule,
    ImageCropperComponent,
  ],
  declarations: [PhotoCropPage]
})
export class PhotoCropPageModule {}
