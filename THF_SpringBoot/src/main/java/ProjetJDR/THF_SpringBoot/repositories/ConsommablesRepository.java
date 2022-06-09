package ProjetJDR.THF_SpringBoot.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Consommables;

public interface ConsommablesRepository extends JpaRepository<Consommables, Long> {

	

	
	@Query("select c from Consommables c where c.id=: id")
	Optional<Consommables> findByIdConsommables(@Param("id") Long id);
	
	List<Consommables> findAll();

	Optional<Consommables> findConsommablesByLibelle(String libelle);
	
}
