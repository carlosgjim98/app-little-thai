import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { RestaurantSelectionPageRoutingModule } from './restaurant-selection-routing.module';

import { RestaurantSelectionPage } from './restaurant-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantSelectionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RestaurantSelectionPage]
})
export class RestaurantSelectionPageModule {}
