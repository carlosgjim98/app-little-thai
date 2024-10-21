import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';

import { IonicModule } from '@ionic/angular';

import { SetUpAccountPageRoutingModule } from './set-up-account-routing.module';

import { SetUpAccountPage } from './set-up-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetUpAccountPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SetUpAccountPage]
})
export class SetUpAccountPageModule {}
