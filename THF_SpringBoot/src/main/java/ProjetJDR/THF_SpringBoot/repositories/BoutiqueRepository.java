package ProjetJDR.THF_SpringBoot.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Boutique;
import ProjetJDR.THF_SpringBoot.entity.Consommables;
import ProjetJDR.THF_SpringBoot.entity.Equipement;

public interface BoutiqueRepository extends JpaRepository<Boutique, Long> {// Le JPA permet d'avoir le CRUD de base,
	// c'est pour �a que la classe est vide :
	// pas besoin de le coder(les m�thodes
	// chiantes sont implement�es dans les
	// services)

	@Query("select c from Consommables c where c.id=: id")
	Optional<Consommables> findByIdConsommables(@Param("id") Long id);

	@Query("select c from Consommables c where c.libelle=:libelle")
	Optional<Consommables> findConsommablesByLibelle(@Param("libelle") String libelle);
	
	@Query("select c from Consommables")
	List<Consommables> findAllConsommables();
	
	

	
	@Query("select e from Equipement e where e.id=: id")
	Optional<Equipement> findByIdEquipement(@Param("id") Long id);

	@Query("select e from Equipement e where e.libelle=:libelle")
	Optional<Equipement> findEquipementByLibelle(@Param("libelle") String libelle);

	@Query("select e from Equipement")
	List<Equipement> findAllEquipement();

	

}