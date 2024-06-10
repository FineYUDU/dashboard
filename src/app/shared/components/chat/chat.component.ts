import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '@services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit, OnDestroy {
  // @injections
  public chatService = inject( ChatService );
  // @properties
  texto = '';
  mensajesSubscription!: Subscription;
  mensajes: any[] = [];
  element!: HTMLElement | null;
  
  ngOnInit(): void {
    
    this.element = document.getElementById('chat--messages');

    this.mensajesSubscription = this.chatService.getMessages().subscribe( msg => {
      
      console.log( msg );
      this.mensajes.push( msg );

      setTimeout(()=>{
        if(this.element) 
        this.element.scrollTop = this.element.scrollHeight;
      }, 50)
      
    });
    
  }
  ngOnDestroy(): void {
    this.mensajesSubscription.unsubscribe();
  }

  send() {
    if (this.texto.length === 0)  return;
    this.chatService.sendMessage( this.texto );
    this.texto = '';
  }

}
