import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form: FormGroup;
  email: any;

  constructor(
    private modalCtrl: ModalController,
    private utilities: UtilitiesService,
    private api: ApiService) {
  }


  /**
   * Inicializamos el formulario
   */
   public ngOnInit(): void {
     
    this.form = new FormGroup({
     
      email: new FormControl('', 
        {validators: [Validators.required, Validators.email]}
      ),
    });
  } 
  
  /**
     * Cerrar el modal
     */
   public closeModal(): void {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }  
  
  /**
     * Enviar la contraseña al servidor
     */
   async submitForm() {
    this.utilities.showLoading();
    this.api.forgotPassword(this.form.value).subscribe(response => {
      console.log(response);
      this.utilities.showToast('Se ha enviado el email correctamente!');
      this.utilities.dismissLoading();
    }, error => {
      console.log(error);
      this.utilities.showToast('Error al enviar el email');
      this.utilities.dismissLoading();
    });
}
  

}
