package ProjetJDR.THF_SpringBoot.entity;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;

@Entity
@DiscriminatorValue("admin")
public class Admin extends Compte {

}
