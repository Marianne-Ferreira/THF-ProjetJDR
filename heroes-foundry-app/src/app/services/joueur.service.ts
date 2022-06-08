import { Consommables } from '../model/consommables';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Personnage } from '../model/personnage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joueur } from '../model/joueur';
import { Stuff } from '../model/stuff';
import { Boutique } from '../model/boutique';
import { Equipement } from '../model/equipement';

@Injectable({
  providedIn: 'root',
})
export class JoueurService {
  url: string = 'http://localhost:8080/api/joueur';
  constructor(private httpClient: HttpClient) {}

  getByIdJoueur(id: number): Observable<Joueur> {
    return this.httpClient.get<Joueur>(`${this.url}/${id}`);
  }

  deleteJoueurById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  deleteJoueurByPseudo(pseudo: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${pseudo}`);
  }

  deleteStuffById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  getStuffById(id: number): Observable<Stuff> {
    return this.httpClient.get<Stuff>(`${this.url}/${id}`);
  }

  private stuffToJson(stuff: Stuff): any {
    let obj = {
      id: stuff.id,
      quantite: stuff.quantite,
      equipement: stuff.equipement,
      consommables: stuff.consommables,
    };
  }

  createStuff(stuff: Stuff): Observable<Stuff> {
    return this.httpClient.post<Stuff>(this.url, this.stuffToJson(stuff));
  }

  updateStuff(stuff: Stuff): Observable<Stuff> {
    return this.httpClient.put<Stuff>(
      `${this.url}/${stuff.id}`,
      this.stuffToJson(stuff)
    );
  }

  getAllPersonnages(): Observable<Personnage[]> {
    return this.httpClient.get<Personnage[]>(this.url + '/personnage');
  }

  createPersonnage(personnage: Personnage) {
    let personnageJson = {
      id: personnage.id,
      gold: personnage.gold,
      nom: personnage.nom,
      prenom: personnage.prenom,
      age: personnage.age,
      genre: personnage.genre,
      alignement: personnage.alignement,
      race: personnage.race,
      caracteristiques: personnage.caracteristiques,
      stats: personnage.stats,
      stuff: personnage.stuff,
      metier: personnage.metier,
    };
    return this.httpClient.post<Personnage>(this.url, personnageJson);
  }

  deletePersonnageById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  getAllBoutique(boutique: Boutique): Observable<Boutique[]> {
    return this.httpClient.get<Boutique[]>(this.url);
  }

  getAllConsommables(consommables: Consommables): Observable<Consommables[]> {
    return this.httpClient.get<Consommables[]>(this.url);
  }

  getAllEquipement(equipement: Equipement): Observable<Equipement[]> {
    return this.httpClient.get<Equipement[]>(this.url);
  }
}

