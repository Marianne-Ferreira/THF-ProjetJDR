package ProjetJDR.THF_SpringBoot.entity;

import java.util.Objects;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;


@Embeddable
public class Caracteristiques {

	@JsonView(JsonViews.Common.class)
	private int force; 
	@JsonView(JsonViews.Common.class)
	private int dexterite;
	@JsonView(JsonViews.Common.class)
	private int charisme;
	@JsonView(JsonViews.Common.class)
	private int sagesse;
	@JsonView(JsonViews.Common.class)
	private int intelligence;
	@JsonView(JsonViews.Common.class)
	private int constitution;
//	@Enumerated(EnumType.STRING)
//	private Competences competences;
	
	public Caracteristiques() {
		
	}

	public int getForce() {
		return force;
	}

	public void setForce(int force) {
		this.force = force;
	}

	public int getDexterite() {
		return dexterite;
	}

	public void setDexterite(int dexterite) {
		this.dexterite = dexterite;
	}

	public int getCharisme() {
		return charisme;
	}

	public void setCharisme(int charisme) {
		this.charisme = charisme;
	}

	public int getSagesse() {
		return sagesse;
	}

	public void setSagesse(int sagesse) {
		this.sagesse = sagesse;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public int getConstitution() {
		return constitution;
	}

	public void setConstitution(int constitution) {
		this.constitution = constitution;
	}

//	public Competences getCompetences() {
//		return competences;
//	}
//
//	public void setCompetences(Competences competences) {
//		this.competences = competences;
//	}

	
	
	
}

