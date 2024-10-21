import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { AddNewCardPageRoutingModule } from './add-new-card-routing.module';

import { AddNewCardPage } from './add-new-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewCardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddNewCardPage]
})
export class AddNewCardPageModule {}
