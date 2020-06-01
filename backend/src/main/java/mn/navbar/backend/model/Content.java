package mn.navbar.backend.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "contents")
public class Content {

	private @Id @GeneratedValue (strategy = GenerationType.IDENTITY) Long id;

	private String name;

	@Column(length = 8000)
	private String contentText;

	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;

	private boolean published;

	public Content() {
	}

	public Content(String name, String contentText, LocalDateTime createdAt, LocalDateTime updatedAt,
			boolean published) {
		this.name = name;
		this.contentText = contentText;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.published = published;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContentText() {
		return contentText;
	}

	public void setContentText(String contentText) {
		this.contentText = contentText;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean published) {
		this.published = published;
	}

}
