import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  public pages = [

    { tab: 'inicio', name: 'Inicio', icon: '../../../assets/icons/inicio.svg' },
    { tab: 'carta', name: 'Carta', icon: '../../../assets/icons/food-menu-svgrepo-com.svg' },
    { tab: 'thaipuntos', name: 'Thai puntos', icon: '../../../assets/icons/coin.svg' },
    { tab: 'locales', name: 'Locales', icon: '../../../assets/icons/Trazado46919.svg' },
    { tab: 'profile', name: 'Perfil', icon: '../../../assets/icons/Trazado46921.svg' }

  ];
  
  constructor() {}

}
