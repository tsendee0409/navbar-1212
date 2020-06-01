import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Navbar } from '../../models/navbar.model';
import { NavbarsService } from '../navbars.service';

@Component({
  selector: 'app-navbar-list',
  templateUrl: './navbar-list.component.html',
  styleUrls: ['./navbar-list.component.css']
})
export class NavbarListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  navbars: Navbar[];

  constructor(
    private navbarsService: NavbarsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.navbarsService.navbarsChanged
      .subscribe(
        (navbars: Navbar[]) => {
          this.navbars = navbars;
        }
      );
    this.navbars = this.navbarsService.getNavbars();
  }

  onNewNavbar() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
