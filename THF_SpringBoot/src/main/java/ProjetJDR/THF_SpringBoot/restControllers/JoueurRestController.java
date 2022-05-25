package ProjetJDR.THF_SpringBoot.restControllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import ProjetJDR.THF_SpringBoot.entity.Joueur;
import ProjetJDR.THF_SpringBoot.entity.JsonViews;
import ProjetJDR.THF_SpringBoot.entity.Personnage;
import ProjetJDR.THF_SpringBoot.services.CompteService;
import ProjetJDR.THF_SpringBoot.services.PersonnageService;

@RestController
@RequestMapping("/joueur")
//@CrossOrigin(origins = "*")

public class JoueurRestController {

	@Autowired
	private CompteService compteService;

	@Autowired
	private PersonnageService personnageService; 
	
	
	//INTERACTIONS AVEC SES PERSONNAGES 
	
	@GetMapping("") //Mais la ca va donner tous les personnages de tous les joueurs non ? 
	@JsonView(JsonViews.Common.class)
	public List<Personnage> getAllPersonnages() {
		return personnageService.getAll();
	}
	

	@DeleteMapping("/{id}")
	@JsonView(JsonViews.Common.class) 
	public void DeleteJoueurById(@PathVariable Long id) {
		compteService.deleteByIdJoueur(id);
	}
	

	@GetMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	public Joueur getById(@PathVariable Long id) {
		return (Joueur) compteService.getById(id);
	}

	@GetMapping("/{id}/modules")
	@JsonView(JsonViews.JoueurWithPersonnages.class)
	public Joueur getByIdWithPersonnages(@PathVariable Long id) {
		return compteService.getByIdWithPersonnages(id);
	}

}
