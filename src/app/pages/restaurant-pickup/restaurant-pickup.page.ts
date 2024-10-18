import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-pickup',
  templateUrl: './restaurant-pickup.page.html',
  styleUrls: ['./restaurant-pickup.page.scss'],
})
export class RestaurantPickupPage implements OnInit {
  dishId: number;
  

  public dishes = [
    { id: 1, name: 'Gambas bites', category: 'Entrantes', img: 'assets/imgs/bolitas-de-gamba-scaled(1).png', description: 'Bolas crujientes de gamba acompañadas de una salsa a elegir.', price: 6.95},
    { id: 2, name: 'Thai bites', category: 'Entrantes', img: 'assets/imgs/Fotos-Glovo-y-web-nueva-6-600x600.png', description: 'Bocados crujientes de ternera especiada acompañados de 2…', price: 5.95 },
    { id: 3, name: 'Tempura de gambas', category: 'Entrantes', img: 'assets/imgs/9.TEMPURAGAMBAS.png', description: 'La tempura de gamba, un clásico que nunca falla…', price: 5.95 },
    { id: 4, name: 'Delicias al vapor', category: 'Entrantes', img: 'assets/imgs/delicias-500x501.png', description: 'Bolas crujientes de gamba acompañadas de una salsa a elegir.',price: 5.50 }
  ];
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



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dishId = +params.get('id'); // Obtiene el id del plato
      // Aquí puedes cargar más detalles del plato usando el id
    });
  }
  getDishesByCategory(category: string) {
    return this.dishes.filter(dish => dish.category === category);
  }

}
