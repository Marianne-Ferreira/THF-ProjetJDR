package ProjetJDR.THF_SpringBoot.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Consommables;
import ProjetJDR.THF_SpringBoot.entity.Equipement;

public interface EquipementRepository extends JpaRepository<Equipement, Long>{

	
	@Query("select e from equipement e where e.id=: id")
	Optional<Equipement> findByIdEquipement(@Param("id") Long id);

	List<Equipement> findAll();

	Optional<Equipement> findEquipementByLibelle(String libelle);

	
}
