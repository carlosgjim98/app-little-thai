import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlergenosPageRoutingModule } from './alergenos-routing.module';

import { AlergenosPage } from './alergenos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlergenosPageRoutingModule
  ],
  declarations: [AlergenosPage]
})
export class AlergenosPageModule {}
