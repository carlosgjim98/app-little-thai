import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ApiService } from './api.service';
import { UtilitiesService } from './utilities.service';
import { Notification } from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesNuevasService {

  private counter = 0;

  private notificationItemCount = new BehaviorSubject<number>(0);
  public notificationChanges = new Subject<Notification[]>();

  private notifications: Notification[];

  constructor(private alertCtrl: AlertController, private apiService: ApiService, private utilitiesService: UtilitiesService) {
    //this.checkNotifications();
  }


  /*public getNotifications(){
    this.apiService.getEntity('notifications').subscribe((notifications: Notification[])=>{
      console.log("mis notificaciones", notifications);
      
      this.notifications = null;
      this.notifications = notifications;

      this.notificationChanges.next();
    },(error)=>{
      this.utilitiesService.showToast('Error al obtener el listado de notificaciones');
    })
  }*/

  public addNotification(data){
    this.notificationChanges.next(data);
  }

  public getObservable() : Subject<any>{
    return this.notificationChanges;
  }


  public getNotificationsArray(){
    return this.notifications;
  }

  public checkNotifications(){
      this.apiService.getEntity('notificationsNuevas').subscribe((count) => {
      this.notificationItemCount.next(count);

      //this.events.publish('notification:badge');
      

    }, (error) => {
      console.log("Error al obtener las notificaciones nuevas");

    });
    
  }

  /*public getNotificationsItemCount() {
    return this.notificationItemCount.value;
  }*/

  /*public addNotification(): void {
    
    this.notificationItemCount.next(this.notificationItemCount.value + 1);
    //this.events.publish('notification:badge');


  }*/

/*
  public deleteNewNotification(id:number): void {
    
    let notificationIndex = this.notifications.findIndex(element => element.id == id);

    this.apiService.getEntity('notificationsNuevas', id).subscribe((count)=>{
      this.notificationItemCount.next(this.notificationItemCount.value - 1);
      //this.events.publish('notification:badge');
      this.notifications[notificationIndex].nueva = 0;
      this.utilitiesService.showToast('Notificación marcada como vista');

    }, (error)=>{
      console.log("Error al obtener las notificaciones nuevas");
      
    });

  }


  public deleteNotification(id:number) {
    

    this.apiService.deleteEntity('notifications', id).subscribe((count) => {
      //this.notificationItemCount.next(this.notificationItemCount.value - 1);

      this.notifications.splice(this.notifications.findIndex(element => element.id == id), 1);

      this.utilitiesService.showToast('Notificación eliminada correctamente');

    }, (error) => {
      console.log("Error al obtener las notificaciones nuevas");

    });

  }


  

  public clearNotifications(): void {
    
    this.notificationItemCount.next(0);
  }*/
}