package mn.navbar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.navbar.backend.model.Navbar;

public interface NavbarRepository extends JpaRepository<Navbar, Long> {

}