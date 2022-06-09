import { Injectable } from '@angular/core';
import { Compte } from '../model/compte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public auth(login: string, password: string): Observable<Compte> {
    let monHeaders = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${login}:${password}`),
    });
    return this.httpClient.get<Compte>('http://localhost:8080/boot/api/auth/connexion', {
      headers: monHeaders,
    });
  }

  public get authenticated(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  constructor(private httpClient: HttpClient) {}
}
