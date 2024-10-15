import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuOnTablePageRoutingModule } from './menu-on-table-routing.module';

import { MenuOnTablePage } from './menu-on-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuOnTablePageRoutingModule
  ],
  declarations: [MenuOnTablePage]
})
export class MenuOnTablePageModule {}
