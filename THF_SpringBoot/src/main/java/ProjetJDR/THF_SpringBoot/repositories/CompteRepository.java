package ProjetJDR.THF_SpringBoot.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Joueur;

public interface CompteRepository extends JpaRepository <Compte, Long>{

	@Query("Select c from Compte c where c.login=:login and c.password=:password")
	Optional<Compte> seConnecter(@Param("login") String login, @Param("password") String password);

	@Query("Select j from Joueur j")
	List<Joueur> findAllJoueurs();

	@Query("select j from Joueur j left join fetch j.personnages where j.id=:id")
	Optional<Joueur> findByIdWithPersonnages(@Param("id") Long id);
}

