import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  constructor(private modalController: ModalController, ) { }

  closeModal() {
    this.modalController.getTop().then(modal => {
      if (modal) {
        modal.dismiss(); // Cierra el modal
      }
    });
  }


  ngOnInit() {
  }

}
