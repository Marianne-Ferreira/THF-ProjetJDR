package ProjetJDR.THF_SpringBoot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ProjetJDR.THF_SpringBoot.entity.Stats;

public interface StatsRepository extends JpaRepository <Stats,Long> {

}
