import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { WebsocketService } from '@services/websocket.service';

@Component({
  selector: 'server-status',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  // @injectiosn
  public wsService = inject( WebsocketService );

}
