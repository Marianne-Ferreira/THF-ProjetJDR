package ProjetJDR.THF_SpringBoot.entity;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(name="seqCompte", sequenceName = "seq_joueur", initialValue = 1, allocationSize = 1)
public class Joueur {

	private String pseudo;

	public Joueur () {
		
	}
	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}
	
	
}

