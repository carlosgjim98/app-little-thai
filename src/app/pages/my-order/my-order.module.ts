import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { MyOrderPageRoutingModule } from './my-order-routing.module';

import { MyOrderPage } from './my-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOrderPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [MyOrderPage]
})
export class MyOrderPageModule {}
