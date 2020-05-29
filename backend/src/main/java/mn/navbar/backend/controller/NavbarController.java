package mn.navbar.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mn.navbar.backend.exception.NotFoundException;
import mn.navbar.backend.model.Navbar;
import mn.navbar.backend.repository.NavbarRepository;

@RestController
public class NavbarController {

	private final NavbarRepository navbarRepo;

	NavbarController(NavbarRepository navbarRepo) {
		this.navbarRepo = navbarRepo;
	}

	// Aggregate root

	@GetMapping("/navbars")
	List<Navbar> all() {
		return this.navbarRepo.findAll();
	}

	@PostMapping("/navbars")
	Navbar newNavbar(@RequestBody Navbar newNavbar) {
		return this.navbarRepo.save(newNavbar);
	}

	// Single item

	@GetMapping("/navbars/{id}")
	Navbar one(@PathVariable Long id) {
		return this.navbarRepo.findById(id).orElseThrow(() -> new NotFoundException("Navbar", id));
	}

	@PutMapping("/navbars/{id}")
	Navbar replaceNavbar(@RequestBody Navbar newNavbar, @PathVariable Long id) {
		return this.navbarRepo.findById(id).map(navbar -> {
			navbar.setName(newNavbar.getName());

			// Delete old Navitems
			navbar.getNavitems().clear();

			// Add new Navitems
			newNavbar.getNavitems().forEach(navitem -> {
				navitem.setNavbar(navbar);
			});

			return this.navbarRepo.save(navbar);
		}).orElseGet(() -> {
			newNavbar.setId(id);
			return this.navbarRepo.save(newNavbar);
		});
	}

	@DeleteMapping("/navbars/{id}")
	void deleteNavbar(@PathVariable Long id) {
		this.navbarRepo.deleteById(id);
	}
}