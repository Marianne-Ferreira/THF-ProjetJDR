package ProjetJDR.THF_SpringBoot.entity;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@SequenceGenerator(name="seqCompte", sequenceName = "seq_joueur", initialValue = 1, allocationSize = 1)
public class Joueur extends Compte {
	@JsonView(JsonViews.Common.class)
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

