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

	@Query("Select c from Compte c where c.login=:login")
	Optional<Compte> findByLogin(String login);

	@Query("Select c from Compte c where c.login=:login and c.password=:password")
	Optional<Compte> seConnecter(@Param("login") String login, @Param("password") String password);

	@Query("Select j from Joueur j")
	List<Joueur> findAllJoueurs();
	
	@Query("Select c from Joueur j where j.pseudo=:pseudo")
	Optional<Joueur> findByPseudo(String pseudo);

	@Query("select j from Joueur j left join fetch j.personnages where j.id=:id")
	Optional<Joueur> findByIdWithPersonnages(@Param("id") Long id);
	
	@Query ("delete j from Joueur j where j.pseudo =: pseudo")
	Optional<Joueur> deleteByPseudoJoueur(String pseudo);
	
	@Query ("delete j from Joueur j where j.pseudo =: pseudo")
	Optional<Admin> deleteByAdmin(String admin);
	
}

