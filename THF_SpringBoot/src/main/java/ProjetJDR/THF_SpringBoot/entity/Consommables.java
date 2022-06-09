package ProjetJDR.THF_SpringBoot.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("consommables")
public class Consommables extends Boutique {
	@JsonView(JsonViews.ConsommablesFromBoutique.class)
	private String libelle; 
	@JsonView(JsonViews.ConsommablesFromBoutique.class)
	private String description; 
	
	public Consommables () {
		
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLibelle() {
		return libelle;
	}

	public void setLibelle(String libelle) {
		this.libelle = libelle;
	}
	
	
	
}
