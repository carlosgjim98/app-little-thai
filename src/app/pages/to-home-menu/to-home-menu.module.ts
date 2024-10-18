import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { ToHomeMenuPageRoutingModule } from './to-home-menu-routing.module';

import { ToHomeMenuPage } from './to-home-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToHomeMenuPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToHomeMenuPage]
})
export class ToHomeMenuPageModule {}
