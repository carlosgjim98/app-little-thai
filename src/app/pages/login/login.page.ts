import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors } from 'src/app/utils/utils';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';

const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

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
    public platform: Platform
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

  async ionViewDidEnter(){
    GoogleAuth.initialize();
    await FacebookLogin.initialize({ appId: '748077676570420' });

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


  public loginApple(){

  }

  public async loginGoogle(){
    const user = await GoogleAuth.signIn();
    
    console.log("user" , user);
    
  }

  async loginFacebook() {
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

    if (result.accessToken && result.accessToken.userId) {
      let token = result.accessToken;
      this.loadUserData(token);
    } else if (result.accessToken && !result.accessToken.userId) {
      // Web only gets the token but not the user ID
      // Directly call get token to retrieve it now
      this.getCurrentToken();
    } else {
      // Login failed
    }
  }

  async getCurrentToken() {
    const result = await FacebookLogin.getCurrentAccessToken();

    if (result.accessToken) {
      let token = result.accessToken;
      this.loadUserData(token);
    } else {
      // Not logged in.
    }
  }

  async loadUserData(token) {
    const url = `https://graph.facebook.com/${token.userId}?fields=id,name,picture.width(720),birthday,email&access_token=${token.token}`;
    /*this.http.get(url).subscribe(res => {
      this.user = res;
    });*/

    console.log("url " , url);
    
  }

}
