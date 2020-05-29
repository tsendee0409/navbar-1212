package mn.navbar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.navbar.backend.model.Navitem;

public interface NavitemRepository extends JpaRepository<Navitem, Long> {

}