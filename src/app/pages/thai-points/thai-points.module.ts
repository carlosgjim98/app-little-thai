import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThaiPointsPageRoutingModule } from './thai-points-routing.module';

import { ThaiPointsPage } from './thai-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThaiPointsPageRoutingModule
  ],
  declarations: [ThaiPointsPage]
})
export class ThaiPointsPageModule {}
