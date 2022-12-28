import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors } from 'src/app/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public isUpdating: boolean;
  public form: FormGroup;

  public usuarioFacebook: User;

  constructor(
    private apiService: ApiService,
    private utilitiesService: UtilitiesService,
    private navCtrl: NavController,
    private auth: AuthenticationService,
    /*private fb: Facebook,
    private googlePlus: GooglePlus*/
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('info@xerintel.es', 
        {validators: [Validators.required, Validators.email]}
      ),
      password: new FormControl('xeripassword', 
        {validators: [Validators.required, Validators.minLength(8)]}
      ),
    });
  }


  public submitForm() {

    console.log("hola");
    console.log(this.form.valid);
    
   
    console.log(this.form.value);

    this.utilitiesService.showLoading("Entrando...");

    this.apiService.login(this.form.value).subscribe((user: User) => {

      this.utilitiesService.dismissLoading();
      console.log(user);

      //Ahora aplicamos la cabecera devuelta a las siguientes peticiones
      this.apiService.setTokenToHeaders(user.api_token);

      //Emitimos el evento de login
      //this.events.publish('user:login');

      //Vamos a inicio
      this.auth.login(user.api_token);

    }, (error) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast(codeErrors(error));
    });
  }
}
