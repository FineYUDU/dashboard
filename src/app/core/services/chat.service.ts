import { Injectable, inject } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({providedIn: 'root'})

export class ChatService {

    // !TODO:Coment for now
    // public wsService = inject( WebsocketService );

    // sendMessage( mensaje: string ) {

    //     const payload = {
    //         de:'Erick',
    //         cuerpo: mensaje
    //     };

    //     this.wsService.emit('mensaje', payload)

    // }

    // getMessages() {
    //     return this.wsService.listen('mensaje-nuevo');
    // }
    
}