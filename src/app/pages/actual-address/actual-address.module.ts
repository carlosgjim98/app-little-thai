import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualAddressPageRoutingModule } from './actual-address-routing.module';

import { ActualAddressPage } from './actual-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualAddressPageRoutingModule
  ],
  declarations: [ActualAddressPage]
})
export class ActualAddressPageModule {}
