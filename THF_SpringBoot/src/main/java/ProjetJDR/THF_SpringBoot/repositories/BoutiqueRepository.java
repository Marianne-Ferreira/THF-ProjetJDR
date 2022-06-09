package ProjetJDR.THF_SpringBoot.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import ProjetJDR.THF_SpringBoot.entity.Boutique;


public interface BoutiqueRepository extends JpaRepository<Boutique, Long> {


}