package mn.navbar.backend.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import mn.navbar.backend.exception.NotFoundException;
import mn.navbar.backend.model.Content;
import mn.navbar.backend.repository.ContentRepository;

@RestController
public class ContentController {

	private final ContentRepository contentRepo;

	ContentController(ContentRepository contentRepo) {
		this.contentRepo = contentRepo;
	}

	// Aggregate root

	@GetMapping("/contents")
	List<Content> all() {
		return this.contentRepo.findAll();
	}

	@PostMapping("/contents")
	Content newContent(@RequestBody Content newContent) {
		newContent.setCreatedAt(LocalDateTime.now());
		newContent.setUpdatedAt(LocalDateTime.now());
		return this.contentRepo.save(newContent);
	}

	// Single item

	@GetMapping("/contents/{id}")
	Content one(@PathVariable Long id) {
		return this.contentRepo.findById(id).orElseThrow(() -> new NotFoundException("Content", id));
	}

	@PutMapping("/contents/{id}")
	Content replaceContent(@RequestBody Content newContent, @PathVariable Long id) {
		return this.contentRepo.findById(id).map(content -> {
			content.setName(newContent.getName());
			content.setContentText(newContent.getContentText());
			content.setUpdatedAt(LocalDateTime.now());
			content.setPublished(newContent.isPublished());
			return this.contentRepo.save(content);
		}).orElseGet(() -> {
			newContent.setId(id);
			newContent.setCreatedAt(LocalDateTime.now());
			newContent.setUpdatedAt(LocalDateTime.now());
			return this.contentRepo.save(newContent);
		});
	}

	@DeleteMapping("/contents/{id}")
	void deleteContent(@PathVariable Long id) {
		this.contentRepo.deleteById(id);
	}
}