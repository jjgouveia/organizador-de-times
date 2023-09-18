import { Component } from '@angular/core';
import { Player, PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent {
  public nome: string = '';

  constructor(private playerService: PlayerService) {}

  public addPlayer(player: Player) {
    if (this.nome.length > 0) {
      this.playerService.createPlayer(player).subscribe(() => {
        this.nome = '';
      });
    }
  }
}
