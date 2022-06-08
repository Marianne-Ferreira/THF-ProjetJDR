import { Observable } from 'rxjs';
import { Boutique } from './../model/boutique';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {

  url : string = 'http://localhost:8080/'

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable<Boutique[]>{
		return this.httpClient.get<Boutique[]>(this.url + '/gestion');
	}

  create(boutique : Boutique) {
    let boutiqueJson = {
      nomStuff : boutique.nomStuff,
    };
    return this.httpClient.post<Boutique>(this.url, boutiqueJson);
  }

  update(boutique: Boutique): Observable<Boutique> {
    return this.httpClient.put<Boutique>(`${this.url}/${boutique.nomStuff}`, boutique);
  }

  delete(boutique : Boutique) : Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${boutique.nomStuff}`);



	//CONSOMMABLES

  getAll() : Observable<Consommables[]>{
		return this.httpClient.get<Consommables[]>(`${this.url}/${}`;
	}


	public Consommables getByIdConsommables(Long id) { // Ici on prend l'un des items present dans la boutique via son id
		return boutiqueRepository.findByIdConsommables(id).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un Id valide");
		});
	}

getConsommablesByLibelle(libelle : string) { // Ici on prend l'un des items present dans la boutique
		// via son id
		return boutiqueRepository.findConsommablesByLibelle(libelle).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un libelle valide");
		});
	}

	public Consommables createConsommables(Consommables consommables) { // on cr e un objet
		return (Consommables) boutiqueRepository.save(consommables);
	}

	public Consommables updateConsommables (Consommables consommables) {
		return (Consommables)boutiqueRepository.save(consommables);
	}

	public void deleteByIdConsommables(Long id) {
		boutiqueRepository.deleteById(id);
	}



	//EQUIPEMENT


	public List<Equipement> getAllEquipement() {
		return boutiqueRepository.findAllEquipement();
	}

	public Equipement getByIdEquipement(Long id) { // Ici on prend l'un des items present dans la boutique via son id
		return boutiqueRepository.findByIdEquipement(id).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un Id valide");
		});
	}

	public Equipement getEquipementByLibelle(String libelle) { // Ici on prend l'un des items present dans la boutique
		// via son id
		return boutiqueRepository.findEquipementByLibelle(libelle).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un libelle valide");
		});
	}

	public Equipement createEquipement(Equipement equipement) { // on cr e un objet
		return (Equipement) boutiqueRepository.save(equipement);
	}

	public Equipement updateEquipement (Equipement equipement) {
		return (Equipement)boutiqueRepository.save(equipement);
	}

	public void deleteByIdEquipement(Long id) {
		boutiqueRepository.deleteById(id);

	}

}
