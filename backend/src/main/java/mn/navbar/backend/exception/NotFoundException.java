package mn.navbar.backend.exception;

public class NotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public NotFoundException(String model, Long id) {
		super("Could not find " + model + ": " + id);
	}
}