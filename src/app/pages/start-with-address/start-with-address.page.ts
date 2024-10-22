import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-start-with-address',
  templateUrl: './start-with-address.page.html',
  styleUrls: ['./start-with-address.page.scss'],
})
export class StartWithAddressPage implements OnInit {

  constructor(
    public modal : ModalController
  ) { }


  ngOnInit() {
  }

}
