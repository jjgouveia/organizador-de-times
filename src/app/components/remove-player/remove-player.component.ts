import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-remove-player',
  templateUrl: './remove-player.component.html',
  styleUrls: ['./remove-player.component.scss'],
})
export class RemovePlayerComponent {
  constructor(private jogadorService: PlayerService) {}

  public removeAllPlayers() {
    this.jogadorService.removeAllPlayers().subscribe();
  }
}
