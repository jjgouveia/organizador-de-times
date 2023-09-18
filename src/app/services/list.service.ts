import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private baseApiUrl = environment.API_URL;
  private apiUrl = `${this.baseApiUrl}/times`;

  constructor(private http: HttpClient) {}

  public getTimes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
