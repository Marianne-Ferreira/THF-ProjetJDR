package ProjetJDR.THF_SpringBoot.entity;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Embeddable
public class Stats {

	@Enumerated(EnumType.STRING)
	private Metiers metier; 
	@Enumerated(EnumType.STRING)
	private Competences competence; 
	
	
	
	
	
}
