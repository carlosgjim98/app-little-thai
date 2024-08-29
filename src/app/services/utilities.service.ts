import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Capacitor } from '@capacitor/core';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { PhotoCropPage } from '../pages/utils/photo-crop/photo-crop.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FileOpener, FileOpenerOptions } from '@capacitor-community/file-opener';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { ImageViewPage } from '../pages/utils/image-view/image-view.page';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  public loading:HTMLIonLoadingElement;

  public base64img: any;
  public videoVisualizar: string;
  public editable: boolean;
  public fileVideoToUpload: any;
  public fileToUpload: any;
  public aspectRatioUndefined?: boolean = false;

  public deleteImageOrVideoEvent = new EventEmitter<any>();
  public addFormDataEvent = new EventEmitter<any>();

  public aspectRatio = 1 / Math.sqrt(2);
  
  constructor(private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    private toast: ToastController,
    private actionsheetCtrl: ActionSheetController,
    private sanetizer: DomSanitizer,
    private http: HttpClient,
    private modalCtrl: ModalController,
    private navCtrl: NavController
    ) { }

  
  /**
     * Muestra loading
     * @param message Mensaje del loading (opcional)
     */
  async showLoading(message?: string, duration?: number) {
    this.loading= await this.loadingCtrl.create({
      message: message ? message : null,
      duration: duration ? duration : null
    });
    return this.loading.present();
  }

  /**
   * Quita el loading cargado (arreglado)
   */
  public dismissLoading() {
    this.loading.dismiss().then(() => { return true; })
  }

  /**
   * Devuelve el sistema operativo del dispositivo
   */
  public getPlatform() {
    return this.platform.is('ios') ? 'ios' : 'android';
  }

  /**
   * Devuelve el nombre del archivo pasado (incluida la extensión)
   * @param path Ruta del archivo
   */
  public getFileName(path: string) {
    return path.split('/').pop();
  }

  /**
   * Devuelve la extensión del archivo pasado
   * @param path Ruta del archivo
   */
  public getFileExtension(path: string) {
    return path.split('.').pop().toLowerCase();
  }

  /**
   * Muestra un alert genérico para notificar algo (un error, éxito, etc)
   * @param title Título del alert
   * @param message Mensaje del alert
   */
  public async showAlert(title: string, message: string, backdropDismiss = true) {
    let alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['OK'],
      backdropDismiss: backdropDismiss
    });

    alert.present();
  }

  /**
   * Muestra un toast genérico para notificar algo (un error, éxito, etc)
   * @param message Mensaje del toast
   */
  public async showToast(message: string) {
      const toast = await this.toast.create({
        message: message,
        duration: 5000,
        buttons:['OK']
      });
      toast.present();
  }

  public capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  async selectFileImage() {

    const actionSheet = await this.actionsheetCtrl.create({
      header: 'Seleccionar imagen',
      mode: 'ios',
      buttons: [
        {
          text: 'Galería',

          handler: () => {
            
          }
        },
        {
          text: 'Cámara',
          handler: () => {
            
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

  



  /**
   * 
   * @param limit Límite de archivos : 0 --> Sin límite ; 1 --> Límite a 1 archivo
   * @returns Return files array (data: Url al archivo Blob) (blob : Blob del archivo tanto en Web como en Android e iOS)
   */
  public async adjuntarArchivos(limit: number = 1): Promise<any> {
    try {
      
      let files = [];
      // Primero, obtenemos el archivo seleccionado
      const result = await FilePicker.pickFiles({
        limit: limit,
        readData: false,
      });
  
      console.log("Result pick files", result);


      result.files.forEach(file => {
        
        let blob: Blob | null = null;
        let url: string = '';
    
        this.fileVideoToUpload = file.path;
        url = Capacitor.convertFileSrc(this.fileVideoToUpload);
        this.videoVisualizar = url;
        console.log("FILEPATH ARCHIVO", url);
    
        if (file.blob) {
          blob = file.blob;
          url = URL.createObjectURL(blob);
          this.videoVisualizar = url;
          console.log("FILEPATH ARCHIVO WEB", url);
    
          this.fileVideoToUpload = blob;
          file.path = this.videoVisualizar;

        } else if (url) {
          const headers = new HttpHeaders({});
    
          this.http.get(Capacitor.convertFileSrc(this.fileVideoToUpload), { headers, responseType: 'blob' }).subscribe((blob)=>{
            blob = blob;
            this.fileVideoToUpload = blob;

            file.data = this.videoVisualizar;
            file.blob = this.fileVideoToUpload;
          });
        }
        
        
    
      });


      return result.files;


      
    } catch (error) {
      console.error("Error en adjuntarArchivo:", error);
      // Si hay un error, devuelve un objeto con valores null para manejar el error en la llamada
      return { url: '', blob: null };
    }
  }


  public async adjuntarVideo(): Promise<{ url: string, blob: Blob | null }> {
    try {
      // Primero, obtenemos el video seleccionado
      const result = await FilePicker.pickVideos({
        limit: 1,
        readData: false,
      });
  
      console.log("Result pick videos", result);
  
      const file = result.files[0];
      let blob: Blob | null = null;
      let url: string = '';
  
      this.fileVideoToUpload = file.path;
      url = Capacitor.convertFileSrc(this.fileVideoToUpload);
      this.videoVisualizar = url;
      console.log("FILEPATH VIDEO", url);
  
      if (file.blob) {
        blob = file.blob;
        url = URL.createObjectURL(blob);
        this.videoVisualizar = url;
        console.log("FILEPATH VIDEO WEB", url);
  
        this.fileVideoToUpload = blob;
      } else if (url) {
        const headers = new HttpHeaders({});
  
        blob = await this.http.get(Capacitor.convertFileSrc(this.fileVideoToUpload), { headers, responseType: 'blob' }).toPromise();
        console.log("BLOB DEL FILE EN ANDROID VIDEO", blob);
  
        this.fileVideoToUpload = blob;
      }
  
      // Devolver el objeto con la URL y el Blob
      return { url: this.videoVisualizar, blob: this.fileVideoToUpload };
      
    } catch (error) {
      console.error("Error en adjuntarVideo:", error);
      // Si hay un error, devuelve un objeto con valores null para manejar el error en la llamada
      return { url: '', blob: null };
    }
  }


  public async adjuntarImagenCamera(crop: boolean = false, aspectRatio?: number): Promise<{ url: string, blob: Blob | null } | any> {
    try {

      const file = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });

      let blob: Blob | null = null;
      let url: string = '';

      const headers = new HttpHeaders({});

      blob = await this.http.get(file.webPath, { headers, responseType: 'blob' }).toPromise();

      this.fileToUpload = blob;
      url = file.webPath;
      this.base64img = url;

      if (crop) {
        let response = await this.modalCrop(this.fileToUpload, aspectRatio);
        return response;
        
      }else{
        return { url: this.base64img, blob: blob };
      }

    } catch (error) {
      console.error("Error en adjuntarImagenCamera:", error);
      return error;

      
    }
  }

  public async adjuntarImagen(crop: boolean = false, aspectRatio? :number): Promise<{ url: string, blob: Blob | null }> {
    try {
      const result = await FilePicker.pickImages({
        limit: 1,
        readData: true,
      });
  
      const file = result.files[0];
      let blob: Blob | null = null;
      let url: string = '';
  
      this.fileToUpload = file.path;
  
      if (file.blob) {
        blob = file.blob;
        this.fileToUpload = blob;
        url = URL.createObjectURL(blob);
        this.base64img = url;
        if (crop) {
          let response = await this.modalCrop(this.fileToUpload, aspectRatio);
          return response;
        }else{
          return { url: this.base64img, blob: blob };
        }
        
      } else {
        this.fileToUpload = file.data;
        this.base64img = file.data;
       
        if (crop) {
          await this.modalCropMobile(this.fileToUpload, aspectRatio);
        }else{

          const byteArray = Uint8Array.from(atob(this.base64img.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));

          // Crear el Blob a partir del array de bytes
          const blob = new Blob([byteArray], { type: 'image/jpeg' });

          // Crear el objeto File a partir del Blob
          this.fileToUpload = new File([blob], 'image.jpg', { type: 'image/jpeg' });
          //this.fileToUpload = blob;

          this.base64img = URL.createObjectURL(this.fileToUpload);
          url = this.base64img;
          console.log("FILEPATH IMAGE MOBILE", url);  

          return { url: this.base64img, blob: this.fileToUpload };

        }
      }


      return { url: '', blob: null };

  
  
    } catch (error) {
      console.error("Error en adjuntarImagen:", error);
      // Si hay un error, devuelve un objeto con valores null para manejar el error en la llamada
      return { url: '', blob: null };
    }
  }

  public async modalCrop(file, aspectRatio?: number): Promise<{ url: string, blob: Blob | null }> {
    try {
      const modal = await this.modalCtrl.create({
        component: PhotoCropPage,
        cssClass: "modal-crop",
        componentProps: {
          base64img: file,
          aspectRatio: aspectRatio,
          phone: false,
          aspectRatioUndefined: aspectRatio ? false : true,
        }
      });
  
      await modal.present();
  
      return new Promise<{ url: string, blob: Blob | null }>((resolve) => {
        modal.onDidDismiss().then(dataReturned => {
          if (dataReturned.role === 'dismiss') {
            this.deleteImageOrVideo();
            resolve({ url: '', blob: null });
          } else if (dataReturned.role === 'file') {
            this.fileToUpload = dataReturned.data;
            this.base64img = Capacitor.convertFileSrc(this.fileToUpload);
            console.log("FILEPATH IMAGE", this.base64img);
  
            // Convertir la imagen a un ObjectURL si es necesario
            this.base64img = URL.createObjectURL(this.fileToUpload);
            console.log("FILEPATH IMAGE WEB", this.base64img);
  
            resolve({ url: this.base64img, blob: this.fileToUpload });
          } else {
            resolve({ url: '', blob: null });
          }
        });
      });
  
    } catch (error) {
      console.error("Error en modalCrop:", error);
      return { url: '', blob: null };
    }
  }

  public async modalCropMobile(file, aspectRatio?: number): Promise<{ url: string, blob: Blob | null }>{
    try {
      const modal = await this.modalCtrl.create({
        component: PhotoCropPage,
        cssClass: "modal-crop",
        componentProps: {
          base64img: file,
          aspectRatio:  aspectRatio,
          phone: true,
          aspectRatioUndefined: aspectRatio ? false : true,

        }
      });

      await modal.present();

      return new Promise<{ url: string, blob: Blob | null }>((resolve) => {

        modal.onDidDismiss().then(async dataReturned => {
          if(dataReturned.role == 'dismiss'){
            this.deleteImageOrVideo();
            resolve({ url: '', blob: null });

          }else if (dataReturned.role == 'file'){
            this.fileToUpload = dataReturned.data.file;
            this.base64img = dataReturned.data.objUrl;
  
            console.log("LOG MOBILE OBJECT URL",  this.base64img);
            console.log("LOG MOBILE FILE ",  this.fileToUpload);            
            
            resolve({ url: this.base64img, blob: this.fileToUpload });
  
            
          }else{
            resolve({ url: '', blob: null });
          }
  
        });
      });

    } catch (error) {
      console.error("Error en modalCrop:", error);
      return { url: '', blob: null };
    }
  }

  public getSantizeUrl(url : string){
    return this.sanetizer.bypassSecurityTrustUrl(url);
  }


  public deleteImageOrVideo(){
    this.fileToUpload = null;
    this.fileVideoToUpload = null;
    this.base64img = null;
    this.videoVisualizar = null;
    this.deleteImageOrVideoEvent.emit(true);
  }



  public async openImageUrl(image){
    const modal = await this.modalCtrl.create({
      component: ImageViewPage,
      cssClass: "modal-crop",
      id: 'modal-view',
      componentProps: {
        image: image,
      }
    });

    await modal.present();
  }

  public async openVideoUrl(video){

    const modal = await this.modalCtrl.create({
      component: ImageViewPage,
      cssClass: "modal-crop",
      id: 'modal-view',
      componentProps: {
        video: video,
      }
    });

    await modal.present();
  }

}
