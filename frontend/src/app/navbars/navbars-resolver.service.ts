import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Navbar } from '../models/navbar.model';
import { DataStorageService } from '../data-storage.service';
import { NavbarsService } from './navbars.service';

@Injectable({ providedIn: 'root' })
export class NavbarsResolverService implements Resolve<Navbar[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private navbarsService: NavbarsService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const navbars = this.navbarsService.getNavbars();

        if (navbars.length === 0) {
            return this.dataStorageService.fetchNavbars();
        } else {
            return navbars;
        }
    }
}
