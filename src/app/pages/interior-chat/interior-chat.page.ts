import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/models/Chat';
import { Mensaje } from 'src/app/models/Mensaje';
import { ApiService } from 'src/app/services/api.service';
import { NotificacionesNuevasService } from 'src/app/services/notificaciones-nuevas.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-interior-chat',
  templateUrl: './interior-chat.page.html',
  styleUrls: ['./interior-chat.page.scss'],
})
export class InteriorChatPage implements OnInit {

  @ViewChild('content', {static: true}) private content: any;

  public messages: Mensaje[];
  public chat_id: number;
  public chat: Chat;
  public isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private utilities: UtilitiesService,
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private notificacionesService: NotificacionesNuevasService
  ) { 
    this.route.params.subscribe((params: any)=> {
      this.chat_id = params.chat_id;
      //this.chatName = params.nombre_chat;
      //this.lastMessage = params.ultimo_mensaje;
    });

    this.chat = history.state.chat;
  }

  public ionViewDidEnter():void{
    this.getMensajes();
  }
   /* Obtenemos los mensajes y nos suscribimos a las notificaciones push */
   public ngOnInit(): void {

    this.notificacionesService.getObservable().subscribe((mensaje)=>{
      this.ngZone.run(() => {
        let m: Mensaje = {
          id: mensaje.id,
          texto: mensaje.texto,
          user_name: mensaje.user_name,
          created_at: mensaje.created_at,
          imagen: mensaje.imagen,
          avatar: mensaje.avatar,
        }
        console.log("mensaje", m);
        setTimeout(() => {
          this.chat.ultimo_mensaje = m.created_at;
          this.messages.push(m);
          this.content.scrollToBottom(300);
        }, 1000);

      })
      
    });
      
  }


  public getMensajes(): void {
    this.isLoading = true;
    this.apiService.getSubEntity('chats', this.chat_id, 'mensajes').subscribe((messages: Mensaje[]) => {
      this.isLoading = false;
      this.messages = messages;
      setTimeout(() => {
        this.content.scrollToBottom(1000);
      }, 200);
    }, error => {
      this.isLoading = false;
      console.log(error);
      this.utilities.showToast("No se pueden obtener los mensajes");
    });
    this.apiService.deleteEntity('mensajesNuevos', this.chat_id).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }


   /* Enviar mensaje */
   public sendMessage(message: Mensaje): void {

    if (message.texto != "" || message.imagen) {
      let msj: Mensaje = {
        texto: message.texto,
        created_at: Date.now(),
        chat_id: this.chat_id,
        imagen: message.imagen,
      }
      console.log(message);


      this.apiService.addSubEntity('chats', this.chat_id, 'mensajes', msj).subscribe((mensaje: Mensaje) => {
        this.messages.push(msj);
        this.chat.ultimo_mensaje = msj.created_at;
        this.content.scrollToBottom(300);
      }, error => {
        this.utilities.showToast("No se ha podido enviar el mensaje");
        console.log(error);
      });

    }
  }



}
