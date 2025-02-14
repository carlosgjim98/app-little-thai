import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { ToHomePageRoutingModule } from './to-home-routing.module';

import { ToHomePage } from './to-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ToHomePage]
})
export class ToHomePageModule {}
