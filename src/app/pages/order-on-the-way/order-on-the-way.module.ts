import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderOnTheWayPageRoutingModule } from './order-on-the-way-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderOnTheWayPage } from './order-on-the-way.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderOnTheWayPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [OrderOnTheWayPage]
})
export class OrderOnTheWayPageModule {}
