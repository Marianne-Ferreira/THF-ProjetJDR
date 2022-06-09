package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseStatus;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Joueur;
import ProjetJDR.THF_SpringBoot.exceptions.BoutiqueException;
import ProjetJDR.THF_SpringBoot.repositories.CompteRepository;
import ProjetJDR.THF_SpringBoot.repositories.JoueurRepository;


@Service
public class CompteService implements UserDetailsService {

	@Autowired
	private CompteRepository compteRepository;
	
	@Autowired
	private JoueurRepository joueurRepository;

	public List<Compte> getAll() {
		return compteRepository.findAll();
	}

	public List<Joueur> getAllJoueurs() {
		return joueurRepository.findAll();
	}

	public Compte getById(Long id) {
		return compteRepository.findById(id).orElseThrow(RuntimeException::new);
	}

	public Joueur getByIdWithPersonnages(Long id) {
		return joueurRepository.findByIdWithPersonnages(id).orElseThrow(RuntimeException::new);
	}

//	public Compte seConnecter(String login, String password) {
//		return compteRepository.seConnecter(login, password).orElseThrow(RuntimeException::new);
//	}

	public Compte create(Compte compte) {
		// encodage du mot de passe quand on saura faire
		// compte.setPassword(fonctionEncodage(compte.getPassword()));
		return compteRepository.save(compte);
	}

	public Compte update(Compte compte) {
		Compte compteEnBase = getById(compte.getId());
		compteEnBase.setLogin(compte.getLogin());
		compteEnBase.setNom(compte.getNom());
		compteEnBase.setPrenom(compte.getPrenom());
		return compteRepository.save(compteEnBase);
	}

//	public Compte updatePassword() {
//		
//	}

	public void delete(Compte compte) {
		compteRepository.delete(compte);
	}
	//@RolesAllowed("Joueur")
	public void deleteByIdJoueur(Long id) {
		compteRepository.deleteById(id);
	}

	public void deleteByPseudoJoueur(String pseudo) {
		joueurRepository.deleteByPseudoJoueur(pseudo);
	}

	public Compte getByLogin(String login) {
		return compteRepository.findByLogin(login).orElseThrow(() -> {
			throw new BoutiqueException("Login indisponible");
		});

	}

	public boolean checkLoginExist(String login) {
		return compteRepository.findByLogin(login).isPresent();
	}

	@Override
	public UserDetails loadUserByUsername(String pseudo) throws UsernameNotFoundException {
		return joueurRepository.findByPseudo(pseudo).orElseThrow(() -> {
			throw new UsernameNotFoundException("Pseudo introuvable");
		});
	}

	
}
