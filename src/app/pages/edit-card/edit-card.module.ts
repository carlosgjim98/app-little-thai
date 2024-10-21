import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { EditCardPageRoutingModule } from './edit-card-routing.module';

import { EditCardPage } from './edit-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditCardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditCardPage]
})
export class EditCardPageModule {}
