import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderDeliveredPageRoutingModule } from './order-delivered-routing.module';

import { OrderDeliveredPage } from './order-delivered.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDeliveredPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrderDeliveredPage]
})
export class OrderDeliveredPageModule {}
