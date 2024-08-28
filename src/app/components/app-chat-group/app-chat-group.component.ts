import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chat } from 'src/app/models/Chat';

@Component({
  selector: 'app-chat-group',
  templateUrl: './app-chat-group.component.html',
  styleUrls: ['./app-chat-group.component.scss'],
})
export class AppChatGroupComponent implements OnInit {

  @Input() chat: Chat;
  @Input() slidingOptionsSide: string;
  @Input() slidingOptionsColor: string;
  @Input() slidingOptionsIcon: string;
  constructor(
    private navController: NavController
  ) { }

  ngOnInit() {}


  public navigateChat(){
    this.navController.navigateForward(['/interior-chat', this.chat.id], 
      {
        state: {
          chat : this.chat
        }
      }
    )
  }

}
