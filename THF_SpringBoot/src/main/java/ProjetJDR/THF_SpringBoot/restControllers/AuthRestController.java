package ProjetJDR.THF_SpringBoot.restControllers;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import ProjetJDR.THF_SpringBoot.entity.Compte;
import ProjetJDR.THF_SpringBoot.entity.JsonViews;

@RestController
@CrossOrigin(origins = "*")
public class AuthRestController {
	@GetMapping("/api/auth")
	@JsonView(JsonViews.Common.class)
	public Compte authentification(@AuthenticationPrincipal Compte compte ) {
		return compte;
	}
	

}
