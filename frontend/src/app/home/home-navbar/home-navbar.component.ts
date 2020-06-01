import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Navbar } from '../../models/navbar.model';
import { Navitem } from '../../models/navitem.model';
import { NavbarsService } from '../../navbars/navbars.service';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {
  navbars: Navbar[];
  faBars = faBars;
  childrens = {};

  constructor(
    private navbarsService: NavbarsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.navbars = this.navbarsService.getNavbars();

    this.navbars.forEach(navbar => {
      navbar.navitems.forEach(navitem => {
        this.childrens[navitem.id] = navbar.navitems.filter(navi => navitem.id == navi.parent && navi.published);
      })
    })

  }

  getClass(index: number) {
    let classes = ['is-link', 'is-info', 'is-warning', 'is-success', 'is-danger', 'is-black', 'is-dark', 'is-light', 'is-white', 'is-primary'];
    return classes[index];
  }

  onLinkClicked(navitem: Navitem) {
    if (navitem.link.startsWith('http')) {
      window.location.assign(navitem.link);
    } else {
      this.router.navigate(['../' + navitem.link], { relativeTo: this.route });
    }
  }
}
