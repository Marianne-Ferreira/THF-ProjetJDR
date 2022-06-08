package ProjetJDR.THF_SpringBoot.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;

import ProjetJDR.THF_SpringBoot.entity.Admin;
import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Joueur;

public interface CompteRepository extends JpaRepository <Compte, Long>{
	 	

	
	Optional<Compte> findByLogin(String login);

	@Query("SELECT c FROM compte c WHERE compte.login=:login AND compte.password=:password")
	Optional<Compte> seConnecter(@Param("login") String login, @Param("password") String password);
//
//	@Query("Select j from Joueur j")
//	List<Joueur> findAllJoueurs();
//	
//	@Query("Select c from Joueur j where j.pseudo=:pseudo")
//	Optional<Joueur> findByPseudo(String pseudo);
//

//	

//	
//	@Query ("delete j from Joueur j where j.pseudo =: pseudo")
//	Optional<Admin> deleteByAdmin(String admin);
//	
 	
}

