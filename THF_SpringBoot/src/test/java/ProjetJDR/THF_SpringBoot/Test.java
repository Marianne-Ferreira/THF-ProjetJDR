package ProjetJDR.THF_SpringBoot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Commit;

import javax.transaction.Transactional;

import org.hibernate.annotations.Comment;



import ProjetJDR.THF_SpringBoot.services.CompteService;
import ProjetJDR.THF_SpringBoot.services.PersonnageService;
import ProjetJDR.THF_SpringBoot.services.StuffService;

@SpringBootTest
public class Test {
	@Autowired
	private StuffService stuffService;
	
	@Autowired
	private PersonnageService personnageService;
	
	@Autowired
	private CompteService compteService;
	
	
	@Transactional
	@Commit
	public void intit() {
		
	}
	

}
