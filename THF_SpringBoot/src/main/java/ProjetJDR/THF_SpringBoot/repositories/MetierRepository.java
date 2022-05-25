package ProjetJDR.THF_SpringBoot.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Metier;
import ProjetJDR.THF_SpringBoot.entity.Personnage;

public interface MetierRepository extends JpaRepository <Metier, Long>{
	
	@Query("select m from Metier m where m.prenom=:prenom")
	Optional<Metier> findByPrenom(@Param("prenom") String prenom);

	@Query("select m from Metier m where m.nom=:nom")
	Optional<Metier> findByNom(@Param("nom") String nom);

}
