import { Equipement } from './../model/equipement';
import { Consommables } from './../model/consommables';
import { Boutique } from './../model/boutique';
import { Joueur } from './../model/joueur';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url: string = 'http://localhost:8080/boot/api/admin';
  constructor(private httpClient: HttpClient) {}

  getAllJoueurs(): Observable<Joueur[]> {
    return this.httpClient.get<Joueur[]>(this.url);
  }

  getJoueurById(id: number): Observable<Joueur> {
    return this.httpClient.get<Joueur>(`${this.url}/${id}`);
  }

  deleteJoueurById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  getJoueurByIdWithPersonnages(id: number): Observable<Joueur> {
    return this.httpClient.get<Joueur>(`${this.url} +'/personnage'+ ${id}`);
  }

  deletePersonnageById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url} +'/personnage' +${id}`);
  }

  getAllBoutique(boutique: Boutique): Observable<Boutique[]> {
    return this.httpClient.get<Boutique[]>(this.url + '/boutique');
  }

  getAllConsommables(consommables: Consommables): Observable<Consommables[]> {
    return this.httpClient.get<Consommables[]>(
      this.url + '/boutique/consommables'
    );
  }

  //En double
  /*getAllConsommables(consommables: Consommables): Observable<Consommables[]> {
    return this.httpClient.get<Consommables[]>(
      this.url + '/boutique/consommables'
    );
  }*/

  createConsommables(consommables: Consommables): Observable<Consommables> {
    return this.httpClient.post<Consommables>(
      this.url,
      this.consommablesToJson(consommables)
    );
  }
  consommablesToJson(consommables: Consommables): any {
    let obj = {
      libelle: consommables.libelle,
      description: consommables.description,
    };
  }

  updateConsommables(consommables: Consommables) {
    return this.httpClient.put<Consommables>(
      this.url + '/boutique/consommables',
      this.consommablesToJson(consommables)
    );
  }

  deleteByIdConsommables(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.url}+ /boutique/consommables'+${id}`
    );
  }


  createEquipement(equipement: Equipement): Observable<Equipement> {
    return this.httpClient.post<Equipement>(
      this.url,
      this.equipementToJson(equipement)
    );
  }

  equipementToJson(equipement: Equipement): any {
    let obj = {
      libelle: equipement.libelle,
      description: equipement.description,
    };
  }

  updateEquipement(equipement: Equipement) {
    return this.httpClient.put<Equipement>(
      this.url + '/boutique/equipement',
      this.equipementToJson(equipement)
    );
  }

  deleteByIdEquipement(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.url}+ /boutique/equipement'+${id}`
    );
  }
}


