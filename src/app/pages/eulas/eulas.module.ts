import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EulasPageRoutingModule } from './eulas-routing.module';

import { EulasPage } from './eulas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EulasPageRoutingModule
  ],
  declarations: [EulasPage]
})
export class EulasPageModule {}
