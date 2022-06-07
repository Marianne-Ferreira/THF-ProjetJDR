import { Personnage } from './../model/personnage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonnageService {
  url : string = 'http://localhost:8080/personnage';

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(`${this.url}/${id}`);
  }

  getByPrenom(prenom: string): Observable<Personnage> {
    return this.httpClient.get<Personnage>(
      `${this.url}/${personnage.prenom}`,
      personnage
    );
  }

  getByNom(nom: string): Observable<Personnage> {
    return this.httpClient.get<Personnage>(
      `${this.url}/${personnage.nom}`,
      personnage
    );
  }

  getByIdWithStuff(id: number): Observable<Personnage> {
    return this.httpClient.get<Personnage>(
      `${this.url}/${id}/${personnage.stuff}`,
      personnage
    );
  }

  create(personnage: Personnage) {
    let personnageJson = {
      nom: personnage.nom,
      prenom: personnage.prenom,
    };
    return this.httpClient.post<Personnage>(this.url, personnageJson);
  }

  update(personnage: Personnage): Observable<Personnage> {
    return this.httpClient.put<Personnage>(
      `${this.url}/${personnage.id}`,
      personnage
    );
  }

  delete(personnage: Personnage): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.url}/${personnage.id}`,
      personnage
    );
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`); // A voir --> suppression des attributs du personnage
  }

  deleteByNom(nom: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${nom}`);
  }

  deleteByPrenom(prenom: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${prenom}`);
  }
}
