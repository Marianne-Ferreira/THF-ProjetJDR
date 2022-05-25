package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Joueur;
import ProjetJDR.THF_SpringBoot.repositories.CompteRepository;

@Service
public class CompteService implements UserDetailsService{
	

	@Autowired
	private CompteRepository compteRepository;

	public List<Compte> getAll() {
		return compteRepository.findAll();
	}

	public List<Joueur> getAllJoueurs() {
		return compteRepository.findAllJoueurs();
	}

	public Compte getById(Long id) {
		return compteRepository.findById(id).orElseThrow(RuntimeException::new);
	}

	public Joueur getByIdWithPersonnages(Long id) {
		return compteRepository.findByIdWithPersonnages(id).orElseThrow(RuntimeException::new);
	}

	public Compte seConnecter(String login, String password) {
		return compteRepository.seConnecter(login, password).orElseThrow(RuntimeException::new);
	}

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

	public void deleteByIdJoueur(Long id) {
		compteRepository.deleteById(id);
	}
	
	public void deleteByPseudoJoueur(String pseudo) {
		compteRepository.deleteByPseudoJoueur(pseudo);
	}

	@Override
	public UserDetails loadUserByUsername(String pseudo) throws UsernameNotFoundException {
		return compteRepository.findByPseudo(pseudo).orElseThrow(() -> {
			throw new UsernameNotFoundException("Pseudo introuvable");
		});
	}

	
}
