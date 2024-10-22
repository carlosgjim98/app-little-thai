import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReducedPriceMenuPageRoutingModule } from './reduced-price-menu-routing.module';

import { ReducedPriceMenuPage } from './reduced-price-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReducedPriceMenuPageRoutingModule
  ],
  declarations: [ReducedPriceMenuPage]
})
export class ReducedPriceMenuPageModule {}
