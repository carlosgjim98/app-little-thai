import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InteriorChatPageRoutingModule } from './interior-chat-routing.module';

import { InteriorChatPage } from './interior-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InteriorChatPageRoutingModule
  ],
  declarations: [InteriorChatPage]
})
export class InteriorChatPageModule {}
