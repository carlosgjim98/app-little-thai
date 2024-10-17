
import { NgModule, ɵisComponentDefPendingResolution } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppChatItemComponent } from './app-chat-item/app-chat-item.component';
import { AppChatGroupComponent } from './app-chat-group/app-chat-group.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AppChatFooterComponent } from './app-chat-footer/app-chat-footer.component';
import { FormsModule } from '@angular/forms';
import { AppChatHeaderComponent } from './app-chat-header/app-chat-header.component';
import { AppLoadingComponent } from './app-loading/app-loading.component';
import { AppNotificationItemComponent } from './app-notification-item/app-notification-item.component';
import { AppRatingComponent } from './app-rating/app-rating.component';
import { ErrorViewComponent } from './error-view/error-view.component';
import { AppHeaderComponent } from './app-header/app-header.component';

const COMPONENTS = [
  AppChatItemComponent,
  AppChatGroupComponent,
  AppChatFooterComponent,
  AppChatHeaderComponent,
  AppLoadingComponent,
  AppRatingComponent,
  AppNotificationItemComponent,
  ErrorViewComponent,
  AppHeaderComponent,
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule,
    FormsModule,
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS]
})
export class ComponentsModule { }