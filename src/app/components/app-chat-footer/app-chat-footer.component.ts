import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Mensaje } from 'src/app/models/Mensaje';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './app-chat-footer.component.html',
  styleUrls: ['./app-chat-footer.component.scss'],
})
export class AppChatFooterComponent implements OnInit {

  public message: Mensaje;
  @Input() placeholder: string;
  @Output() sendText = new EventEmitter<Mensaje>();

  constructor() { }

  ngOnInit() {
    this.initMessage();
  }

  public async addImage() {

    const permissions = await Camera.requestPermissions();


    if(permissions.photos === 'denied' || permissions.camera === 'denied') {
      console.log("permiso camera " , permissions);
      
    }
    const image = await Camera.getPhoto({
      promptLabelHeader: 'Fotos',
      promptLabelCancel: 'Cancelar',
      promptLabelPhoto: 'Galería',
      promptLabelPicture: 'Cámara',
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
  
    console.log(image);
    
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.message.imagen = 'data:image/jpeg;base64,' + image.base64String;
  
    console.log("imagen " ,this.message.imagen);


    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  }


  public deleteImage(): void {
    console.log('Imagen borrada');
    this.message.imagen = null;
    this.message.urlImagen = null;
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
