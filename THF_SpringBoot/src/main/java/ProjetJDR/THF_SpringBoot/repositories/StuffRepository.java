package ProjetJDR.THF_SpringBoot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ProjetJDR.THF_SpringBoot.entity.Stuff;

public interface StuffRepository extends JpaRepository<Stuff,Long> {

}
