package mn.navbar.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "navitems")
public class Navitem {

	private @Id @GeneratedValue Long id;

	private String name;

	@JsonIgnore
	@ManyToOne
	@JoinColumn(nullable = false)
	private Navbar navbar;

	private int parent;

	private boolean published;

	// Is linked to content
	private boolean linked;

	private String link;

	private int sort;

	public Navitem() {
	}

	public Navitem(String name, Navbar navbar, int parent, boolean published, boolean linked, String link, int sort) {
		this.name = name;
		this.navbar = navbar;
		this.parent = parent;
		this.published = published;
		this.linked = linked;
		this.link = link;
		this.sort = sort;
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

	public Navbar getNavbar() {
		return navbar;
	}

	public void setNavbar(Navbar navbar) {
		this.navbar = navbar;

		navbar.getNavitems().add(this);
	}

	public int getParent() {
		return parent;
	}

	public void setParent(int parent) {
		this.parent = parent;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean published) {
		this.published = published;
	}

	public boolean isLinked() {
		return linked;
	}

	public void setLinked(boolean linked) {
		this.linked = linked;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public int getSort() {
		return sort;
	}

	public void setSort(int sort) {
		this.sort = sort;
	}

}
