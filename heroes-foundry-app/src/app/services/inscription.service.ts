import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../model/compte';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  url = 'http://localhost:8080/boot/api/auth';

  constructor(private http: HttpClient) {}

  public inscription(compte: any): Observable<Compte> {
    return this.http.post<Compte>(this.url + '/inscription', compte);
  }

  public checkLogin(login: string): Observable<boolean> {
    return this.http.get<boolean>(this.url + '/login/' + login);
  }
}
