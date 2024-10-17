import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redeem-sauce',
  templateUrl: './redeem-sauce.page.html',
  styleUrls: ['./redeem-sauce.page.scss'],
})
export class RedeemSaucePage implements OnInit {
  sauceName: string;
  sauceImg: string;
  sauceDescription: string;
  units: number;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.sauceName = params['name'];
      this.sauceImg = params['img'];
      this.sauceDescription = params['description'];
      this.units = +params['units']; // Convierte a número
    });
  }
}