package ProjetJDR.THF_SpringBoot.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Metiers;
import ProjetJDR.THF_SpringBoot.entity.Personnage;

public interface PersonnageRepository extends JpaRepository<Personnage, Long> {

	@Query("select p from Personnage p left join fetch p.stuff where p.id=:id")
	Optional<Personnage> findByIdWithStuff(@Param("id") Long id);

	@Query("select p from Personnage p where p.prenom=:prenom")
	Optional<Personnage> findByPrenom(@Param("prenom") String prenom);

	@Query("select p from Personnage p where p.nom=:nom")
	Optional<Personnage> findByNom(@Param("nom") String nom);

//	@Query("select p from Personnage p left join fetch p.metier where p.metier=:metier")
//	Optional<Personnage> findPersonnageByMetier(@Param("metier") Metiers metier);

	@Query("delete from Personnage p where p.nom =:nom")
	public void deleteByNom(String nom);

	@Query("delete from Personnage p where p.prenom =:prenom")
	public void deleteByPrenom(String prenom);

}