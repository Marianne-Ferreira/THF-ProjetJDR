import { Router } from '@angular/router';
import { Personnage } from './../model/personnage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence-personnage',
  templateUrl: './competence-personnage.component.html',
  styleUrls: ['./competence-personnage.component.css']
})
export class CompetencePersonnageComponent implements OnInit {
  personnage: Personnage = JSON.parse(sessionStorage.getItem('personnage')!);
competence: string = 'mesCompetences'
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // public void ChoixCompetences() {
	// 	if (metier.equals("Developpeur")) {
	// 		System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Arcanes
	// 				+ Competences.Survie + Competences.Escamotage + Competences.Perspicacite);
	// 	}

	// 	else if (metier.equals("Rh")) {
	// 		System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Intimidation
	// 				+ Competences.Representation + Competences.Tromperie + Competences.Investigation);
	// 	} else if (metier.equals("ChefProjet")) {
	// 		System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Survie
	// 				+ Competences.Persuasion + Competences.Perception + Competences.Athletisme);
	// 	} else if (metier.equals("LeadTech")) {
	// 		System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Arcanes
	// 				+ Competences.Escamotage + Competences.Survie + Competences.Persuasion);
	// 	} else if (metier.equals("BusinessAnalyst")) {
	// 		System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Histoire
	// 				+ Competences.Representation + Competences.Investigation + Competences.Discretion);
	// 	} else if (metier.equals("ProductOwner")) {
	// 		System.out.println("Vous pouvez choisir 2 compétences parmi ces 4 : " + Competences.Athletisme
	// 				+ Competences.Representation + Competences.Perception + Competences.Discretion);
	// 	}
	// }

  // public BonusCaractéristique() {
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

  saveCompetence() {

    sessionStorage.setItem('personnage', JSON.stringify(this.personnage));
    this.router.navigate(['/alignement-personnage']);
  }
}
