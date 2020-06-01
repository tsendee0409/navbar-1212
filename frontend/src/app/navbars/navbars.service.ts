import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Navbar } from '../models/navbar.model';

@Injectable({ providedIn: 'root' })
export class NavbarsService {
    navbarsChanged = new Subject<Navbar[]>();
    navbarStoreChanged = new Subject<Navbar>();
    navbarDeleteChanged = new Subject<number>();
    private navbars: Navbar[] = [];

    getNavbars() {
        return this.navbars.slice();
    }

    setNavbars(navbars: Navbar[]) {
        this.navbars = navbars;
        this.navbarsChanged.next(this.navbars.slice());
    }

    getNavbar(index: number) {
        return this.navbars[index];
    }

    setNavbar(index: number, navbar: Navbar) {
        this.navbars[index] = {...navbar};
        this.navbarsChanged.next(this.navbars.slice());
    }

    getNavbarById(id: number) {
        return this.navbars.find(navbar => navbar.id == id);
    }

    getNavbarIndexById(id: number) {
        return this.navbars.findIndex(navbar => navbar.id == id);
    }

    addNavbar(navbar: Navbar) {
        this.navbars.push(navbar);
        this.navbarsChanged.next(this.navbars.slice());
        this.navbarStoreChanged.next(this.navbars[this.navbars.length - 1]);
    }

    updateNavbar(index: number, newNavbar: Navbar) {
        this.navbars[index] = newNavbar;
        this.navbarsChanged.next(this.navbars.slice());
        this.navbarStoreChanged.next(this.navbars[index]);
    }

    deleteNavbar(index: number, id: number) {
        this.navbarDeleteChanged.next(id);
        this.navbars.splice(index, 1);
        this.navbarsChanged.next(this.navbars.slice());
    }
}