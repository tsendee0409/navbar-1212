package mn.navbar.backend.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "navbars")
public class Navbar {

	private @Id @GeneratedValue Long id;

	private String name;

	@OneToMany(mappedBy = "navbar", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<Navitem> navitems;

	public Navbar() {
	}

	public Navbar(String name, Set<Navitem> navitems) {
		this.name = name;
		this.navitems = navitems;
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

	public Set<Navitem> getNavitems() {
		return navitems;
	}

	public void setNavitems(Set<Navitem> navitems) {
		this.navitems = navitems;

		navitems.forEach(navitem -> {
			navitem.setNavbar(this);
		});
	}

}
