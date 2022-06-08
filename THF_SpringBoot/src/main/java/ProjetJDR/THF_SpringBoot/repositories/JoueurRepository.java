package ProjetJDR.THF_SpringBoot.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Joueur;

public interface JoueurRepository extends JpaRepository <Joueur, Long> {
	
	Optional<Joueur> findByPseudo(String pseudo);
	
	@Query("select j from Joueur j left join fetch j.personnages where j.id=:id")
	Optional<Joueur> findByIdWithPersonnages(@Param("id") Long id);
	
	@Query ("delete j from Joueur j where j.pseudo =: pseudo")
	Optional<Joueur> deleteByPseudoJoueur(String pseudo);
	
}
