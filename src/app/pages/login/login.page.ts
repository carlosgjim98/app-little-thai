import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { codeErrors } from 'src/app/utils/utils';
import { FacebookLogin, FacebookLoginResponse } from '@capacitor-community/facebook-login';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

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


  /**
   * ------------------------------------------- REGISTRO LOGIN GOOGLE CAPACITOR --------------------------------------------------------------------------------------
   * 1. Crear y/o consutar proyecto en Firebase
   * 2. Añadir la app para android y/o iOS y seguir los diferentes pasos
   * 3. Añadir hasta 3 Huellas digitales del certificado SHA (SHA-1) (debug, release y google play console)
   *    - a) keytool -list -v -keystore PATH_DEBUG_KEYSTORE -alias androiddebugkey
   *    - b) keytool -list -v -keystore PATH_KEYSTORE -alias ALIAS_NAME
   *    - c) "Integridad de la aplicación" dentro de la App de Google Play Console
   * 4. Añadir google a la app: Authentication --> Sign-in method --> Habilitar Google
   * 5. Descargar el archivo google-services.json (AÑADIR O REEMPLAZAR en la carpeta android > app) y GoogleService-Info.plist (AÑADIR O REEMPLAZAR en carpeta de ios) 
   * 6. MODIICAR capacitor.config.json con androidClientId (WEB CLIENT ID) y iosClientId (REVERSED CLIENT ID) 
   * ------------------------------------------------------------------------------------------------------------------------------------------------------------------ 
  */

  public async loginGoogle(){
    const user = await GoogleAuth.signIn();
    
    console.log("user" , user);
    
  }



  /**
   * ------------------------------------------- REGISTRO LOGIN CON FACEBOOK -------------------------------------------
   * 
   * 1. Registrar la nueva app en : https://developers.facebook.com/apps/
   * 2. Añadir el Login/Registro con Facebook, para Android y/o iOS : 
   *    - Seguir los diferentes pasos para la creación de de los hash (debug and release) (PARA ANDROID)
   *    ---- EJEMPLO GENERACIÓN DEL HASH : keytool -exportcert -alias ALIAS_O_ALIAS_DEBUG -keystore "RUTA_DEBUG_KEY_O_RELEASE_KEY" | "RUTA_OPENSSL" sha1 -binary | "RUTA_OPENSSL" base64
   * 
   * 3. Recoger el identificador de la aplicación (en facebook developers, dentro de la app, en la zona superior izquierda)
   * 4. MODIFICAR APP ID EN EL ARCHIVO android > app > src > main > res > values > string.xml
   
        <string name="facebook_app_id">748077676570420</string>
        <string name="fb_login_protocol_scheme">fb748077676570420</string>
        <string name="facebook_client_token">748077676570420</string>

   * 5. Dentro del developers : Revisión de la aplicación > Permisos y funciones
   *      - Dar permiso a public_profile
   *      - Dar permiso a email
   *      - Realizar la comprobación de uso de datos (tendremos una alerta en naranja).
   *    * 
   * ===================================================================================
   */

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


  
  public loginApple(){

  }

}
