package ProjetJDR.THF_SpringBoot.entity;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Embedded;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.fasterxml.jackson.annotation.JsonView;

@Embeddable
public class Stats {

	@Enumerated(EnumType.STRING)
	private Metiers metier;
	@Enumerated(EnumType.STRING)
	private Competences competence;
	@JsonView(JsonViews.Common.class)
	@Embedded
	@AttributeOverrides({ @AttributeOverride(name = "id", column = @Column(name = "id_carac")),
		@AttributeOverride(name = "force", column = @Column(name = "force_carac")),
		@AttributeOverride(name = "dexterite", column = @Column(name = "dexterite_carac")),
		@AttributeOverride(name = "charisme", column = @Column(name = "charisme_carac")),
		@AttributeOverride(name = "sagesse", column = @Column(name = "sagesse_carac")),
		@AttributeOverride(name = "intelligence", column = @Column(name = "intelligence_carac")),
		@AttributeOverride(name = "constitution", column = @Column(name = "constitution_carac")) })
	private Caracteristiques caracteristiques;

//	int ForceValue = request.getParameter("forceValue");
//	int IntelligenceValue = request.getParameter("intelligenceValue");
//	int ConstitutionValue = request.getParameter("constitutionValue");
//	int SagesseValue = request.getParameter("sagesseValue");
//	int DexteriteValue = request.getParameter("dexteriteValue");
//	int CharismeValue = request.getParameter("charismeValue");

	
	// Compétences accessibles en fonction du métier choisi

	public void ChoixCompetences() {
		if (metier.equals("Developpeur")) {
			System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Arcanes
					+ Competences.Survie + Competences.Escamotage + Competences.Perspicacite);
		}

		else if (metier.equals("Rh")) {
			System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Intimidation
					+ Competences.Representation + Competences.Tromperie + Competences.Investigation);
		} else if (metier.equals("ChefProjet")) {
			System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Survie
					+ Competences.Persuasion + Competences.Perception + Competences.Athletisme);
		} else if (metier.equals("LeadTech")) {
			System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Arcanes
					+ Competences.Escamotage + Competences.Survie + Competences.Persuasion);
		} else if (metier.equals("BusinessAnalyst")) {
			System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Histoire
					+ Competences.Representation + Competences.Investigation + Competences.Discretion);
		} else if (metier.equals("ProductOwner")) {
			System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Athletisme
					+ Competences.Representation + Competences.Perception + Competences.Discretion);
		}
	}

	// Points ajoutés aux caractéristiques en fonction de la compétence choisie
	// /!\ IL FAUT QU'ON ARRIVE A RECUPERER LES DONNEES DU JS POUR QUE CA FONCTIONNE
	// BIEN

//	public void BonusCaractéristique() {
//
//	 if (competence.equals("Arcanes") || competence.equals("Intimidation") || competence.equals("Investigation")
//				|| competence.equals("Intimidation") || competence.equals("Histoire")) {
//			IntelligenceValue = IntelligenceValue + 2;
//		}
//		else if (competence.equals("Athletisme")) {
//			ForceValue = ForceValue + 2;
//		}
//		else if (competence.equals("Representation") || competence.equals("Tromperie") || competence.equals("Persuasion")) {
//			CharismeValue = CharismeValue + 2;
//		}
//		else if (competence.equals("Survie") || competence.equals("Perspicacite") || competence.equals("Perception")) {
//			SagesseValue = SagesseValue + 2;
//		}
//		else if (competence.equals("Escamotage") || competence.equals("Discretion")) {
//			DexteriteValue = DexteriteValue + 2;
//		}
//	}

	
	
}
