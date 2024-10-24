import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  payCardChecked: boolean = false;
  payDatChecked: boolean = false;
  payCashChecked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
