package ProjetJDR.THF_SpringBoot.restControllers ;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.Joueur;
import ProjetJDR.THF_SpringBoot.entity.JsonViews;
import ProjetJDR.THF_SpringBoot.services.CompteService;




@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class CompteRestController {

	@Autowired
	private CompteService compteService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;


	@JsonView(JsonViews.Common.class)
	@GetMapping("")
	public List<Compte> getAll() {
		return compteService.getAll();
	}
	
	@JsonView(JsonViews.Common.class)
	@PreAuthorize("isAnonymous()")
	@PostMapping("/inscription")
	public Compte create(@RequestBody Joueur joueur) {
		if(compteService.checkLoginExist(joueur.getLogin())) {
			throw new ResponseStatusException(HttpStatus.CONFLICT);
		}
		joueur.setPassword(passwordEncoder.encode(joueur.getPassword()));
		return compteService.create(joueur);
	}
	
	
	@GetMapping("/login/{login}")
	public boolean checkLogin(@PathVariable String login) {
		return compteService.checkLoginExist(login);
	}
	
	@GetMapping("/auth")
	@JsonView(JsonViews.Common.class)
	public Compte authentification(@AuthenticationPrincipal Compte compte ) {
		return compte;
	}
	

}
