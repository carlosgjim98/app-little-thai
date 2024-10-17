import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent  implements OnInit {
  
  @Input() title: string = '';
  @Input() chatName: string;
  constructor(private location: Location) {}

  goBack() {
    this.location.back(); // Navega a la página anterior
  }

  ngOnInit() {}

}
