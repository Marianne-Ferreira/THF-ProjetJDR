package ProjetJDR.THF_SpringBoot.entity;

import java.util.Collection;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("joueur")
public class Joueur extends Compte {
	@JsonView(JsonViews.Common.class)
	private String pseudo;
	@JsonView(JsonViews.JoueurWithPersonnages.class)
	@ManyToOne
	private Personnage personnage;

	public Joueur () {
		
	}
	public String getPseudo() {
		return pseudo;
	}

	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}
	public Personnage getPersonnage() {
		return personnage;
	}
	public void setPersonnage(Personnage personnage) {
		this.personnage = personnage;
	}

	
	
}

