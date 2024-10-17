import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DishDetailsPageRoutingModule } from './dish-details-routing.module';

import { DishDetailsPage } from './dish-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DishDetailsPageRoutingModule
  ],
  declarations: [DishDetailsPage]
})
export class DishDetailsPageModule {}
