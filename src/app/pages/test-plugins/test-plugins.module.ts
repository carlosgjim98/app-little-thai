import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPluginsPageRoutingModule } from './test-plugins-routing.module';

import { TestPluginsPage } from './test-plugins.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TestPluginsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TestPluginsPage]
})
export class TestPluginsPageModule {}
