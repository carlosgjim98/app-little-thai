import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountSettingsPageRoutingModule } from './account-settings-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { AccountSettingsPage } from './account-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AccountSettingsPageRoutingModule
  ],
  declarations: [AccountSettingsPage]
})
export class AccountSettingsPageModule {}
