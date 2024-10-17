import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartWithAddressPageRoutingModule } from './start-with-address-routing.module';

import { StartWithAddressPage } from './start-with-address.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartWithAddressPageRoutingModule
  ],
  declarations: [StartWithAddressPage]
})
export class StartWithAddressPageModule {}
