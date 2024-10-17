import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-points',
  templateUrl: './my-points.page.html',
  styleUrls: ['./my-points.page.scss'],
})
export class MyPointsPage implements OnInit {

  thaiPoints: number;
  pointsHistory = [
    {
      img: 'assets/imgs/salsa-chili-dulce@2x.png',
      name: 'Salsa Chili dulce',
      units: 1,
      points: 100
    },
    {
      img: 'assets/imgs/salsa-chili-dulce@2x.png',
      name: 'Salsa Chili dulce',
      units: 1,
      points: 100
    }
    
  ];
  constructor() {
    // Inicializa thaiPoints con un valor por defecto (puede venir de una API o servicio más adelante)
    this.thaiPoints = 1235;  // Ejemplo de valor
  }

  ngOnInit() {
  }

}
