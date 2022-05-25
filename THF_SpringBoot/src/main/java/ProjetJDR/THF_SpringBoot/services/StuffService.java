package ProjetJDR.THF_SpringBoot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ProjetJDR.THF_SpringBoot.entity.Stuff;
import ProjetJDR.THF_SpringBoot.exceptions.StuffException;
import ProjetJDR.THF_SpringBoot.repositories.StuffRepository;

@Service
public class StuffService {

	@Autowired
	private StuffRepository stuffRepository;

	public List<Stuff> getAll() {
		return stuffRepository.findAll();
	}

	public Stuff getById(Long id) {
		return stuffRepository.findById(id).orElseThrow(StuffException::new);
	}

	public Stuff create(Stuff stuff) {
		return stuffRepository.save(stuff);
	}

	public Stuff update(Stuff stuff) {
		return stuffRepository.save(stuff);
	}

	public void delete(Stuff stuff) {
		stuffRepository.delete(stuff);
	}

	public void deleteById(Long id) {
		stuffRepository.deleteById(id);
	}
}
