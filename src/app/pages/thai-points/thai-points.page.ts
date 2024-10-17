import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thai-points',
  templateUrl: './thai-points.page.html',
  styleUrls: ['./thai-points.page.scss'],
})
export class ThaiPointsPage implements OnInit {
  thaiPoints: number = 1235; // Puntos de Thai iniciales
  sauces = [
    {
      id: 1,
      name: 'Sala Chili dulce',
      description: 'De origen tailandés, esta salsa tiene un sabor dulce-salado ligeramente picante.',
      points: 100,
      img: 'assets/imgs/salsa-chili-dulce@2x.png',
      category: 'Salsas' 
    },
    {
      id: 2,
      name: 'Salsa de ostras',
      description: 'De la cocina china tradicional, esta salsa con sabor a sal marina se prepara con ostras y azúcar.',
      points: 100,
      img:  'assets/imgs/salsa-2@2x.png',
      category: 'Salsas' 
    },

    {
      id: 3,
      name: 'Salsa de ostras',
      description: 'De la cocina china tradicional, esta salsa con sabor a sal marina se prepara con ostras y azúcar.',
      points: 100,
      img:  'assets/imgs/salsa-ostras@2x.png',
      category: 'Salsas' 
    }
    
  ];



 
  constructor(private router: Router) {}

 

  ngOnInit() {
  }

  getSaucesByCategory(category: string) {
    // Filtra las salsas según la categoría
    return this.sauces.filter(sauce => sauce.category === category);
  }

  redeemSauce(sauce: any) {
    if (this.thaiPoints >= sauce.points) {
      this.thaiPoints -= sauce.points; // Deduce los puntos
      
      // Redirige a redeem-sauce pasando el nombre de la salsa
      this.router.navigate(['/redeem-sauce'], { queryParams: { name: sauce.name, img: sauce.img, description: sauce.description, units: 1 } });
    } else {
      alert('No tienes suficientes puntos para canjear esta salsa.');
    }
  }
}


