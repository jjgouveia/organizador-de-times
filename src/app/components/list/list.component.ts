import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITime } from 'src/app/services/interface/ITime';
import { ListService } from 'src/app/services/list.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  public teams: ITime[] = [];
  private playerCreatedSubscription!: Subscription;

  constructor(
    private dataService: ListService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.loadData();

    this.playerCreatedSubscription = this.playerService
      .getPlayerCreatedObservable()
      .subscribe(() => {
        this.loadData();
      });
  }

  ngOnDestroy(): void {
    this.playerCreatedSubscription.unsubscribe();
  }

  private loadData() {
    this.dataService.getTimes().subscribe((data) => {
      this.teams = [];

      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.teams.push({ name: key, players: data[key] });
        }
      }
    });
  }

  public removeAllPlayers() {
    this.playerService.removeAllPlayers().subscribe();
  }
}
