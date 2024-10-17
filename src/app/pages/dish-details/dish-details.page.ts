import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.page.html',
  styleUrls: ['./dish-details.page.scss'],
})
export class DishDetailsPage implements OnInit {
  dishId: number;
  dishDetails: any;

  // Salsas
  salsaAjoPimienta: boolean = false;
  salsaCurry: boolean = false;
  salsaChen: boolean = false;
  pimientoRojoDulce: boolean = false;

  // Variables para los extras
  extraAjoPimienta: boolean = false;
  extraSalsaChen: boolean = false;

  necesidadExtra1: boolean = false; 
  necesidadExtra2: boolean = false; 

  quantity: number = 1; // Cantidad inicial
  total: number = 0; // Total inicial

  // Precios de las salsas
  private salsaPrices = {
    ajoPimienta: 1.00,
    curry: 0,
    chen: 1.00,
    pimientoRojoDulce: 0
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dishId = +params.get('id'); // Obtener el id del plato
      this.loadDishDetails(this.dishId); // Cargar detalles del plato
    });
  }

  loadDishDetails(id: number) {
    const dishes = [
      { id: 1, name: 'Gambas bites', category: 'Entrantes', img: 'assets/imgs/bolitas-de-gamba-scaled (1)@3x.png', description: 'Bolas crujientes de gamba acompañadas de una salsa a elegir.', price: 5.50},
      { id: 2, name: 'Thai bites', category: 'Entrantes', img: 'assets/imgs/Fotos-Glovo-y-web-nueva-6-600x600@3x.png', description: 'Bocados crujientes de ternera especiada acompañados de 2…', price: 5.50 },
      { id: 3, name: 'Tempura de gambas', category: 'Entrantes', img: 'assets/imgs/9.TEMPURAGAMBAS@3x.png', description: 'La tempura de gamba, un clásico que nunca falla…', price: 5.50 },
      { id: 4, name: 'Delicias al vapor', category: 'Entrantes', img: 'assets/imgs/delicias-500x501@3x.png', description: 'Bolas crujientes de gamba acompañadas de una salsa a elegir.', price: 5.50 }
    ];

    this.dishDetails = dishes.find(dish => dish.id === id);

    if (this.dishDetails) {
      this.updateTotal();
    }
  }

  // Método para aumentar la cantidad
  increaseQuantity() {
    this.quantity++;
    this.updateTotal(); // Actualiza el total
  }

  // Método para reducir la cantidad
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.updateTotal(); // Actualiza el total
    }
  }

  // Método para calcular el total
  updateTotal() {
    let basePrice = this.dishDetails.price * this.quantity;

    // Agregar extras al precio total
    if (this.extraAjoPimienta) basePrice += 1.00 * this.quantity; // Precio del extra Ajo y Pimienta
    if (this.extraSalsaChen) basePrice += 1.00 * this.quantity;   // Precio del extra Salsa Chen

    // Agregar precios de las salsas
    if (this.salsaAjoPimienta) basePrice += this.salsaPrices.ajoPimienta * this.quantity;
    if (this.salsaCurry) basePrice += this.salsaPrices.curry * this.quantity;
    if (this.salsaChen) basePrice += this.salsaPrices.chen * this.quantity;
    if (this.pimientoRojoDulce) basePrice += this.salsaPrices.pimientoRojoDulce * this.quantity;

    this.total = basePrice;
  }
}
