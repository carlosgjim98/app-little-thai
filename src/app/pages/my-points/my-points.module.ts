import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { MyPointsPageRoutingModule } from './my-points-routing.module';

import { MyPointsPage } from './my-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPointsPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [MyPointsPage]
})
export class MyPointsPageModule {}
