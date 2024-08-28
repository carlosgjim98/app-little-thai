import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { Mensaje } from 'src/app/models/Mensaje';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './app-chat-footer.component.html',
  styleUrls: ['./app-chat-footer.component.scss'],
})
export class AppChatFooterComponent implements OnInit {

  public message: Mensaje;
  @Input() placeholder: string;
  @Output() sendText = new EventEmitter<Mensaje>();

  constructor(
    private utilities: UtilitiesService,
    private actionsheetCtrl: ActionSheetController,
  ) { }

  ngOnInit() {
    this.initMessage();
  }

  async addImage() {

    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Seleccionar archivo',
      mode: 'ios',
      buttons: [
        {
          text: 'Galería',

          handler: () => {
            this.utilities.adjuntarImagen(true).then((response)=>{
              console.log("RESPONSE ADD IMAGE CHAT", response);

              this.message.imagen = response.url;
              this.message.file = response.blob;
              
            });
          }
        },
        {
          text: 'Cámara',
          handler: () => {
            this.utilities.adjuntarImagenCamera(true).then((response)=>{
              console.log("RESPONSE ADD IMAGE CAMERA CHAT", response);
              this.message.imagen = response.url;
              this.message.file = response.blob;
            });
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }


  public deleteImage(): void {
    console.log('Imagen borrada');
    this.message.imagen = null;
    this.message.file = null;
  }


  public onSendText(): void {
    this.sendText.emit(this.message);
    this.initMessage();
  }

  public initMessage():void{
    this.message = {
      texto: "",
      avatar: null,
      imagen: null,
      created_at: Date.now()
    }
  }
}
