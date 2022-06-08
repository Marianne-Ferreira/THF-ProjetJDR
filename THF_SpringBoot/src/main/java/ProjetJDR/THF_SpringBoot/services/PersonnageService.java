package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ProjetJDR.THF_SpringBoot.entity.Metiers;
import ProjetJDR.THF_SpringBoot.entity.Personnage;
import ProjetJDR.THF_SpringBoot.exceptions.PersonnageException;
import ProjetJDR.THF_SpringBoot.repositories.PersonnageRepository;

@Service
public class PersonnageService {
	@Autowired
	private PersonnageRepository personnageRepository;

	public List<Personnage> getAll() {
		return personnageRepository.findAll();
	}

	public Personnage getById(Long id) {
		return personnageRepository.findById(id).orElseThrow(() -> {
			throw new PersonnageException("Veuillez insérer un Id existant");
		});
	}

	public Personnage getByPrenom(String prenom) {
		return personnageRepository.findByPrenom(prenom).orElseThrow(() -> {
			throw new PersonnageException("Prénom introuvable");
		});
	}

	public Personnage getByNom(String nom) {
		return personnageRepository.findByNom(nom).orElseThrow(() -> {
			throw new PersonnageException("Nom introuvable");
		});

	}

	public Personnage getByIdWithStuff(Long id) {
		return personnageRepository.findByIdWithStuff(id).orElseThrow(() -> {
			throw new PersonnageException("Veuillez insérer un Id existant");
		});

	}

	// Retourne tous les personnages dont le metier est celui indiqué par
	// l'utilisateur
	public Personnage getPersonnageByMetier(Metiers metier) {
		return personnageRepository.findPersonnageByMetier(metier).orElseThrow(() -> {
			throw new PersonnageException("Veuillez insérer un Id existant");
		});

	}

	public Personnage create(Personnage personnage) {
		if (personnage.getNom() == null || personnage.getNom().isEmpty()) {
			throw new PersonnageException();
		}
		return personnageRepository.save(personnage);
	}

	public Personnage update(Personnage personnage) {
		return personnageRepository.save(personnage);
	}

	public void delete(Personnage personnage) {
		personnageRepository.delete(personnage);
	}

	public void deleteById(Long id) {
		personnageRepository.deleteById(id); // A voir --> suppression des attributs du personnage
	}

	public void deleteByNom(String nom) {
		personnageRepository.deleteByNom(nom);
	}

	public void deleteByPrenom(String prenom) {
		personnageRepository.deleteByPrenom(prenom);
	}
}
