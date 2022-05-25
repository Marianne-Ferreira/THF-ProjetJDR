package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ProjetJDR.THF_SpringBoot.entity.Metier;
import ProjetJDR.THF_SpringBoot.entity.Personnage;
import ProjetJDR.THF_SpringBoot.exceptions.MetierException;
import ProjetJDR.THF_SpringBoot.exceptions.PersonnageException;
import ProjetJDR.THF_SpringBoot.repositories.MetierRepository;

@Service
public class MetierService {
	
	@Autowired
	private MetierRepository metierRepository;
	
	public List<Metier> getAll() {
		return metierRepository.findAll();
	}

	public Metier getById(Long id) {
		return metierRepository.findById(id).orElseThrow(MetierException::new);
	}

	public Metier getByPrenom(String prenom) {
		return metierRepository.findByPrenom(prenom).orElseThrow(MetierException::new);
	}

	public Metier getByNom(String nom) {
		return metierRepository.findByNom(nom).orElseThrow(MetierException::new);
	}
	
	
	

}
