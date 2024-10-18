import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderCookingPageRoutingModule } from './order-cooking-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { OrderCookingPage } from './order-cooking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderCookingPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [OrderCookingPage]
})
export class OrderCookingPageModule {}
