import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {


  public user: User;

  constructor( 
    public auth: AuthenticationService,
    private navCtrl: NavController,
    private alertController: AlertController,
    private apiService: ApiService,

    ) { }

  ngOnInit() {
  }

  public async deleteAccount(){
    const alert = await this.alertController.create({
      header: 'Eliminar cuenta',
      subHeader: '¿Estás seguro de eliminar tu cuenta?',
      message: 'Perderás el acceso a la aplicación. Esta acción es irreversible.',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Alert canceled');
        },
      },
      {
        text: 'Eliminar',
        role: 'confirm',
        handler: () => {
          console.log('Alert confirmed');

          this.apiService.getEntity('delete-account').subscribe((response)=>{
            console.log("response delete user", response);

            this.auth.logout();
            
          }, (error)=> {

          });
        },
      },],
    });

    await alert.present();
  }

}
