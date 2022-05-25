package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ProjetJDR.THF_SpringBoot.entity.Boutique;
import ProjetJDR.THF_SpringBoot.entity.Consommables;
import ProjetJDR.THF_SpringBoot.entity.Equipement;
import ProjetJDR.THF_SpringBoot.exceptions.BoutiqueException;
import ProjetJDR.THF_SpringBoot.repositories.BoutiqueRepository;

@Service
public class BoutiqueService {

	@Autowired
	private BoutiqueRepository boutiqueRepository;

	public List<Boutique> getAll() {
		return boutiqueRepository.findAll();
	}


	public Boutique create(Boutique boutique) { // on cr�e un objet
		return boutiqueRepository.save(boutique);
	}

	public Boutique update(Boutique boutique) {
		return boutiqueRepository.save(boutique);
	}

	public void delete(Boutique boutique) {
		boutiqueRepository.delete(boutique);
	}

	
	//CONSOMMABLES 

	public List<Consommables> getAllConsommables() {
		return boutiqueRepository.findAllConsommables();
	}

	public Consommables getByIdConsommables(Long id) { // Ici on prend l'un des items present dans la boutique via son id
		return (Consommables) boutiqueRepository.findById(id).orElseThrow(BoutiqueException::new);
	}

	public Consommables getConsommablesByLibelle(String libelle) { // Ici on prend l'un des items present dans la boutique
		// via son id
		return (Consommables) boutiqueRepository.findConsommablesByLibelle(libelle).orElseThrow(BoutiqueException::new);
	}

	public Consommables createConsommables(Consommables consommables) { // on cr�e un objet
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
		return (Equipement) boutiqueRepository.findById(id).orElseThrow(BoutiqueException::new);
	}
	
	public Equipement getEquipementByLibelle(String libelle) { // Ici on prend l'un des items present dans la boutique
		// via son id
		return (Equipement) boutiqueRepository.findEquipementByLibelle(libelle).orElseThrow(BoutiqueException::new);
	}

	public Equipement createEquipement(Equipement equipement) { // on cr�e un objet
		return (Equipement) boutiqueRepository.save(equipement);
	}
	
	public Equipement updateEquipement (Equipement equipement) {
		return (Equipement)boutiqueRepository.save(equipement);
	}

	public void deleteByIdEquipement(Long id) {
		boutiqueRepository.deleteById(id);
		
	}
}

