import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderInfoPageRoutingModule } from './order-info-routing.module';

import { OrderInfoPage } from './order-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderInfoPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [OrderInfoPage]
})
export class OrderInfoPageModule {}
