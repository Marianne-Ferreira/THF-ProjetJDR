package ProjetJDR.THF_SpringBoot.entity;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public abstract class Boutique {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqBoutique")
	@JsonView(JsonViews.Common.class)
	protected Long id; 
	@JsonView(JsonViews.Common.class)
	protected String nomStuff; 
	@JsonView(JsonViews.Common.class)
	protected int prix; 
	@JsonView(JsonViews.Common.class)
	protected boolean isAvailable ;
	
	public Boutique () {
		
	}

	
	
	public Boutique(String nomStuff, int prix, boolean isAvailable) {
		super();
		this.nomStuff = nomStuff;
		this.prix = prix;
		this.isAvailable = isAvailable;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNomStuff() {
		return nomStuff;
	}

	public void setNomStuff(String nomStuff) {
		this.nomStuff = nomStuff;
	}

	public int getPrix() {
		return prix;
	}

	public void setPrix(int prix) {
		this.prix = prix;
	}

	public boolean isAvailable() {
		return isAvailable;
	}

	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Boutique other = (Boutique) obj;
		return Objects.equals(id, other.id);
	}
	
	
}
