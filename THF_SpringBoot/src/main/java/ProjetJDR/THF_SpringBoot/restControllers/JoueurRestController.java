package ProjetJDR.THF_SpringBoot.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import ProjetJDR.THF_SpringBoot.entity.Boutique;
import ProjetJDR.THF_SpringBoot.entity.Consommables;
import ProjetJDR.THF_SpringBoot.entity.Equipement;
import ProjetJDR.THF_SpringBoot.entity.Joueur;
import ProjetJDR.THF_SpringBoot.entity.JsonViews;
import ProjetJDR.THF_SpringBoot.entity.Personnage;
import ProjetJDR.THF_SpringBoot.entity.Stuff;
import ProjetJDR.THF_SpringBoot.services.BoutiqueService;
import ProjetJDR.THF_SpringBoot.services.CompteService;
import ProjetJDR.THF_SpringBoot.services.PersonnageService;
import ProjetJDR.THF_SpringBoot.services.StuffService;

@RestController
@RequestMapping("api/joueur")
@CrossOrigin(origins = "*")

public class JoueurRestController {

	@Autowired
	private CompteService compteService;

	@Autowired
	private PersonnageService personnageService;

	@Autowired
	private StuffService stuffService;

	@Autowired
	private BoutiqueService boutiqueService;

	// INTERACTIONS AVEC SES PERSONNAGES

	@GetMapping("/personnage")
	@JsonView(JsonViews.Common.class)
	public List<Personnage> getAllPersonnages() {
		return personnageService.getAll();
	}

	@PostMapping("/personnage")
	@JsonView(JsonViews.Common.class)
	public Personnage createPersonnage(@RequestBody Personnage personnage) {
		return personnageService.create(personnage);
	}
	
	@DeleteMapping("/personnage/{id}")
	@JsonView(JsonViews.JoueurWithPersonnages.class)
	public void DeletePersonnageById(@PathVariable Long id) {
		personnageService.deleteById(id); 
	} 

	// GESTION DU JOUEUR
	
	@GetMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	public Joueur getByIdJoueur(@PathVariable Long id) {
		return (Joueur) compteService.getById(id);
	}//????

//	@GetMapping("/personnage")
//	@JsonView(JsonViews.JoueurWithPersonnages.class)
//	public Joueur getByIdWithPersonnages(@PathVariable Long id) {
//		return compteService.getByIdWithPersonnages(id);
//	}
	
	@DeleteMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	public void DeleteJoueurById(@PathVariable Long id) {
		compteService.deleteByIdJoueur(id);
	}//Possible avec la s??curit??
	
	@DeleteMapping("/pseudo")
	@JsonView(JsonViews.Common.class)
	public void DeleteJoueurByPseudo(@PathVariable String pseudo) {
		compteService.deleteByPseudoJoueur(pseudo);
	}
	
	// GESTION DU STUFF

	@GetMapping("/personnage/stuff") // A v??rifier pour l'URL
	@JsonView(JsonViews.Common.class)
	public List<Stuff> getAllStuff() {
		return stuffService.getAll();
	}

	@DeleteMapping("/stuff/{id}")
	@JsonView(JsonViews.PersonnageWithStuff.class)
	public void DeleteStuffById(@PathVariable Long id) {
		stuffService.deleteById(id);
	}

	@GetMapping("/stuff/{id}")
	@JsonView(JsonViews.PersonnageWithStuff.class)
	public Stuff getStuffById(@PathVariable Long id) {
		return stuffService.getById(id);
	}

	@PostMapping("/{id}")
	@JsonView(JsonViews.PersonnageWithStuff.class)
	public Stuff createStuff(@RequestBody Stuff stuff) {
		return stuffService.create(stuff);
	}

	@PutMapping("/{id}")
	@JsonView(JsonViews.PersonnageWithStuff.class)
	public Stuff updateStuff(@RequestBody Stuff stuff) {
		return stuffService.update(stuff);
	}

	// GESTION DE LA BOUTIQUE

	@GetMapping("/boutique") // Ajouter un bouton de filtre pour s???parer les consommables de l'???quipement
	@JsonView(JsonViews.Common.class)
	public List<Boutique> getAllBoutique() {
		return boutiqueService.getAll();
	}

	// CONSOMMABLES

	@GetMapping("/boutique/consommables")
	@JsonView(JsonViews.ConsommablesFromBoutique.class)
	public List<Consommables> getAllConsommables() {
		return boutiqueService.getAllConsommables();
	}

	// EQUIPEMENT

	@GetMapping("/boutique/equipement")
	@JsonView(JsonViews.EquipementFromBoutique.class)
	public List<Equipement> getAllEquipement() {
		return boutiqueService.getAllEquipement();
	}
	
	

}
