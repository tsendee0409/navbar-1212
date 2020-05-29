package mn.navbar.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mn.navbar.backend.model.Content;

public interface ContentRepository extends JpaRepository<Content, Long> {

}
