import { Injectable } from '@angular/core';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  public loading:HTMLIonLoadingElement;
  
  constructor(private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    private toast: ToastController,
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
}
