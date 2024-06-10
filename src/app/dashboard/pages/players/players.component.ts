// @angular
import { Component } from '@angular/core';
// @components
import { PlayerCardComponent } from '../../components/players-components/player-card/player-card.component';
import { TableComponent } from '@shared/components/table-component/table.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [
    PlayerCardComponent,
    TableComponent,
  ],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export default class PlayersComponent {

}
