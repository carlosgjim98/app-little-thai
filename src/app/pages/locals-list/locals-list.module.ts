import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { LocalsListPageRoutingModule } from './locals-list-routing.module';

import { LocalsListPage } from './locals-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalsListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LocalsListPage]
})
export class LocalsListPageModule {}
