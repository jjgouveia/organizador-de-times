import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';

export type Player = {
  nome: string;
};

import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private baseApiUrl = environment.API_URL;
  private apiUrl = `${this.baseApiUrl}/jogador`;
  private playerCreatedSubject: Subject<void> = new Subject<void>();

  constructor(private http: HttpClient) {}

  getPlayerCreatedObservable(): Observable<void> {
    return this.playerCreatedSubject.asObservable();
  }

  createPlayer(player: Player): Observable<any> {
    return this.http.post(this.apiUrl, player).pipe(
      tap(() => {
        this.playerCreatedSubject.next();
      })
    );
  }

  removeAllPlayers(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/all`).pipe(
      tap(() => {
        this.playerCreatedSubject.next();
      })
    );
  }
}
