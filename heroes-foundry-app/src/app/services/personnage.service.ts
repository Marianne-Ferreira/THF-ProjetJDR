import { Personnage } from '../model/personnage';
import { Metier } from './../model/metier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  url : string = 'http://localhost:8080/personnage'

  constructor(private httpClient: HttpClient) {}

  getById(id : number) : Observable<Personnage>{
    return this.httpClient.get<Personnage>(`${this.url}/${id}`);
    }

    getByPrenom(prenom : string ) : Observable<Personnage>{
      return this.httpClient.get<Personnage>(`${this.url}/${personnage.prenom}`, personnage);
      }

      getByNom(nom : string ) : Observable<Personnage>{
        return this.httpClient.get<Personnage>(`${this.url}/${personnage.nom}`, personnage);
  }

  getByIdWithStuff(id : number) : Observable<Personnage>{
    return this.httpClient.get<Personnage>(`${this.url}/${id}/${personnage.stuff}`, personnage)

}

// Retourne tous les personnages dont le metier est celui indiqué par
// l'utilisateur
getPersonnageByMetier(personnage : Personnage) : Observable<Personnage[]>{
    return this.httpClient.get<Personnage[]>(`${this.url}/${personnage.metier}}`, personnage)
}

//OU

getPersonnageByMetier(metier : Metier) : Observable<Personnage[]>{
  return this.httpClient.get<Personnage[]>(`${this.url}/${personnage.metier}}`, personnage)
}


create(personnage : Personnage) {
  let personnageJson = {
    nom : personnage.nom,
    prenom : personnage.prenom,
  };
  return this.httpClient.post<Personnage>(this.url, personnageJson);
}

update(personnage: Personnage): Observable<Personnage> {
  return this.httpClient.put<Personnage>(`${this.url}/${personnage.id}`, personnage);
}

delete(personnage : Personnage) : Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${personnage.id}`, personnage);
}

deleteById(id : number) : Observable<void> {
  return this.httpClient.delete<void>(`${this.url}/${id}`); // A voir --> suppression des attributs du personnage
}

deleteByNom(nom : string) : Observable<void> {
  return this.httpClient.delete<void>(`${this.url}/${nom}`);
}

deleteByPrenom(prenom : string) : Observable<void> {
  return this.httpClient.delete<void>(`${this.url}/${prenom}`);
}


}
