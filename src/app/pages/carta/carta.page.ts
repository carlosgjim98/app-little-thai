import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.page.html',
  styleUrls: ['./carta.page.scss'],
})
export class CartaPage implements OnInit {

  public categories = [
    { name: 'Entrantes', icon: 'assets/icons/soja.svg' },
    { name: 'Especialidades', icon: 'assets/icons/noodles.svg' },
    { name: 'Sopas', icon: 'assets/icons/soup_4050743.svg' },
    { name: 'Ensaladas', icon: 'assets/icons/salad_7636637.svg' },
    { name: 'Platos veganos', icon: 'assets/icons/natural_6588842.svg' },
    { name: 'Postres', icon: 'assets/icons/Enmascarargrupo4.svg' },
    { name: 'Bbebidas', icon: 'assets/icons/Enmascarargrupo6.svg' },
    { name: 'Cervezas', icon: 'assets/icons/Enmascarargrupo7.svg' },
    { name: 'Vinos', icon: 'assets/icons/Enmascarargrupo8.svg' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
