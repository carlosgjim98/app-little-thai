import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [
    { tab: 'inicio', name: 'Inicio', icon: "assets/icons/inicio.svg" },
    { tab: 'carta', name: 'Carta', icon: "assets/icons/food-menu2.svg" },
    { tab: 'points', name: 'Thai puntos', icon: 'calendar' },
    { tab: 'locals', name: 'Locales', icon: "assets/icons/shop.svg" }, 
    { tab: 'profile', name: 'Perfil', icon: "assets/icons/profile.svg" }
  ];
  
  constructor() {}

}
