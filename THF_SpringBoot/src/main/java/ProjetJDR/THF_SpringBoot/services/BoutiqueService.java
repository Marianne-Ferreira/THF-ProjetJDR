package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ProjetJDR.THF_SpringBoot.entity.Boutique;
import ProjetJDR.THF_SpringBoot.entity.Consommables;
import ProjetJDR.THF_SpringBoot.entity.Equipement;
import ProjetJDR.THF_SpringBoot.exceptions.BoutiqueException;
import ProjetJDR.THF_SpringBoot.repositories.BoutiqueRepository;
import ProjetJDR.THF_SpringBoot.repositories.ConsommablesRepository;
import ProjetJDR.THF_SpringBoot.repositories.EquipementRepository;

@Service
public class BoutiqueService {

	@Autowired
	private BoutiqueRepository boutiqueRepository;
	
	@Autowired
	private ConsommablesRepository consommablesRepository;

	@Autowired
	private EquipementRepository equipementRepository;
	
	
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
		return consommablesRepository.findAll();
	}

	public Consommables getByIdConsommables(Long id) { // Ici on prend l'un des items present dans la boutique via son id
		return consommablesRepository.findByIdConsommables(id).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un Id valide");
		});
	}

	public Consommables getConsommablesByLibelle(String libelle) { // Ici on prend l'un des items present dans la boutique
		// via son id
		return consommablesRepository.findConsommablesByLibelle(libelle).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un libelle valide");
		});
	}

	public Consommables createConsommables(Consommables consommables) { // on cr�e un objet
		return consommablesRepository.save(consommables);
	}

	public Consommables updateConsommables (Consommables consommables) {
		return consommablesRepository.save(consommables);
	}
	
	public void deleteByIdConsommables(Long id) {
		consommablesRepository.deleteById(id);
	}
	
	
	
	//EQUIPEMENT


	public List<Equipement> getAllEquipement() {
		return equipementRepository.findAll();
	}

	public Equipement getByIdEquipement(Long id) { // Ici on prend l'un des items present dans la boutique via son id
		return equipementRepository.findByIdEquipement(id).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un Id valide");
		});
	}
	
	public Equipement getEquipementByLibelle(String libelle) { // Ici on prend l'un des items present dans la boutique
		// via son id
		return equipementRepository.findEquipementByLibelle(libelle).orElseThrow(()->{
			throw new BoutiqueException("Veuillez inserez un libelle valide");
		});
	}

	public Equipement createEquipement(Equipement equipement) { // on cr�e un objet
		return equipementRepository.save(equipement);
	}
	
	public Equipement updateEquipement (Equipement equipement) {
		return equipementRepository.save(equipement);
	}

	public void deleteByIdEquipement(Long id) {
		equipementRepository.deleteById(id);
		
	}
}

