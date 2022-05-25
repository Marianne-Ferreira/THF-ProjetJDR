package ProjetJDR.THF_SpringBoot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Metier;

public interface MetierRepository extends JpaRepository <Metier, Long>{

}
