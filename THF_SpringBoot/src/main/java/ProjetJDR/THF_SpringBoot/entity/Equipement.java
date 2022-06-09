package ProjetJDR.THF_SpringBoot.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("equipement")
public class Equipement extends Boutique {
	@JsonView(JsonViews.EquipementFromBoutique.class) 
	private String libelle; 
	@JsonView(JsonViews.EquipementFromBoutique.class) 
	private String description; 
	
	public Equipement () {
		
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