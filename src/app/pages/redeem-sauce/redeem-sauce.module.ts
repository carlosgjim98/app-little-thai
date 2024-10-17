import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemSaucePageRoutingModule } from './redeem-sauce-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RedeemSaucePage } from './redeem-sauce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemSaucePageRoutingModule,
    ComponentsModule
  ],
  declarations: [RedeemSaucePage]
})
export class RedeemSaucePageModule {}
