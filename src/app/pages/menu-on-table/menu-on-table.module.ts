import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { MenuOnTablePageRoutingModule } from './menu-on-table-routing.module';

import { MenuOnTablePage } from './menu-on-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuOnTablePageRoutingModule,
    ComponentsModule
  ],
  declarations: [MenuOnTablePage]
})
export class MenuOnTablePageModule {}
