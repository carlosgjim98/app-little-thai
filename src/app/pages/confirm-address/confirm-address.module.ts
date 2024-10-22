import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { ConfirmAddressPageRoutingModule } from './confirm-address-routing.module';

import { ConfirmAddressPage } from './confirm-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmAddressPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfirmAddressPage]
})
export class ConfirmAddressPageModule {}
