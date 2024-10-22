import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { LocalsFilterPageRoutingModule } from './locals-filter-routing.module';

import { LocalsFilterPage } from './locals-filter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    LocalsFilterPageRoutingModule
  ],
  declarations: [LocalsFilterPage]
})
export class LocalsFilterPageModule {}
