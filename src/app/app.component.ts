import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { User } from './models/User';
import { ApiService } from './services/api.service';
import { AuthenticationService } from './services/authentication.service';
import { UtilitiesService } from './services/utilities.service';
import {
    ActionPerformed,
    PushNotificationSchema,
    PushNotifications,
    Token,
  } from '@capacitor/push-notifications';
import { NotificacionesNuevasService } from './services/notificaciones-nuevas.service';
import { environment } from 'src/environments/environment';
import { AppUpdate, AppUpdateAvailability, AppUpdateInfo } from '@capawesome/capacitor-app-update';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: User;
  public isLoading: boolean = true;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Chats',
      url: '/chats',
      icon: 'chatboxes'
    }

  ]
  constructor(
    private platform: Platform,
    private apiService: ApiService,
    private auth: AuthenticationService,
    private navCtrl: NavController,
    private storage: Storage,
    private utilities: UtilitiesService,
    private notificationsService : NotificacionesNuevasService,
    private router: Router, 
    private zone: NgZone

  ) {}


  
/**
   * Nos suscribimos a los cambios dle perfil
   */
public async ngOnInit() {

  App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
    this.zone.run(() => {
      console.log("APPURLOPEN",  event);

      
        // Example url: https://beerswift.app/tabs/tab2
        // slug = /tabs/tab2
        const slug = event.url.split(".app").pop();
        if (slug) {
            //this.router.navigateByUrl(slug);
        }
        // If no match, do nothing - let regular routing
        // logic take over
    });
});

  setTimeout(() => {
    this.checkAppUpdate();
  }, 10000);

  this.auth.authenticationState.subscribe(token => {
    if (token != 'logout' && token != '') {
      console.log("CAMBIA TOKEN ", token);
      
      this.pushNotifications();
      //this.prepararStripe();
      this.apiService.setTokenToHeaders(token);
      this.navCtrl.navigateRoot('tabs').then(() => {
        this.isLoading = false;
      });
    } else if (token == 'logout') {
      //this.apiService.removeTokenToHeaders();
      this.navCtrl.navigateRoot('cover-page').then(() => {
        this.isLoading = false;
      });
    } else {
      this.isLoading = false;
      console.log("primera vez");
      
    }

    // IMPORTANTE: para comprobar si la app está o no suspendida, debe ponerse el dominio en la propiedad "domainUrl" del archivo "src/environments/environment.ts"
    this.checkIfAppIsSuspended();
  });

  if (this.platform.is('cordova')) {
    this.platform.ready().then(() => {
   
    });
  }

  this.apiService.userChanges.subscribe((user: User) => {
    this.user = user;
  });
}


  public checkAppUpdate(){
    if(this.platform.is('android') || this.platform.is('ios')){
      AppUpdate.getAppUpdateInfo().then((appUpdateInfo: AppUpdateInfo)=>{
      console.log("APP UPDATE INFO", appUpdateInfo);

        if(appUpdateInfo.updateAvailability == AppUpdateAvailability.UPDATE_AVAILABLE ){
          this.utilities.showAlert("App no actualizada","No tienes la versión más reciente de esta app");

          setTimeout(() => {
            AppUpdate.openAppStore();
          }, 3000);
        }
      }, (error)=>{
        console.error("checkAppUpdate : No es posible buscar info de la app -- Este plugin dará error hasta que no esté correctamente la app subida a Stores y sus correspondientes archivos de configuración.");
        
      })
    }

  }


  public checkIfAppIsSuspended() {
    this.apiService.checkAppDomain().subscribe(async (response) => {
      // no hacemos nada, ya que el dominio de la aplicación estaría activado
    },
      async (errorResponse: HttpErrorResponse) => {
        if (errorResponse.status == 0 || errorResponse.status == 403) {
          this.utilities.showAlert('Esta app no ha sido renovada', 'Si usted es el propietario, por favor hable con nosotros en el 956 105 343 para renovar el servicio o contacte con facturacion@xerintel.es', false);
        }
      })
  }


  public pushNotifications(){
    PushNotifications.requestPermissions().then(async result => {
      if (result.receive === 'granted') {
      // Register with Apple / Google to receive push via APNS/FCM
      const regId = await PushNotifications.register();

      
      } else {
        console.log("error de permisos");
        
       // Show some error
      }
    });

    PushNotifications.addListener('registration',
      (token: Token) => {
      console.log('Push registration success, token: ' + token.value);

        this.apiService.guardarTokenDeRegistro(token.value).subscribe((response)=>{
          console.log("response" , response);

          
        }, (error)=>{
          console.log("error" , error);
          
        })
      }
    );




  PushNotifications.addListener('registrationError', (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
  });
  
  PushNotifications.addListener(
          'pushNotificationReceived',
          (notification: PushNotificationSchema) => {
            alert('Push received: ' + JSON.stringify(notification));
            this.notificationsService.addNotification(notification);
            PushNotifications.removeAllDeliveredNotifications();

          },
  );   
  
    PushNotifications.addListener(
            'pushNotificationActionPerformed',
            (notification: ActionPerformed) => {
              alert('Push action performed: ' + JSON.stringify(notification));
            },
    );   



  }


}
