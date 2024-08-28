import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    { tab: 'test-plugins', name: 'Ejemplos', icon: 'logo-ionic' },
    { tab: 'home', name: 'Inicio', icon: 'home' },
    { tab: 'chats', name: 'Chats', icon: 'chatbubbles' },
    { tab: 'calendar', name: 'Calendario', icon: 'calendar' },
    { tab: 'profile', name: 'Perfil', icon: 'person' }
  ];
  constructor() {}

}
