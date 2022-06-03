package ProjetJDR.THF_SpringBoot.exceptions;




public class CompteException extends RuntimeException {
	public CompteException() {

	}

	public CompteException(String message) {
		super(message);
	}
}
