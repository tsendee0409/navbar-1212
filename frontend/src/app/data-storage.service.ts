import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Navbar } from './models/navbar.model';
import { NavbarsService } from './navbars/navbars.service';

import { Content } from './models/content.model';
import { ContentsService } from './contents/contents.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    ipAddress = 'http://localhost:38080';

    navbarStoreChanged: Subscription;
    navbarDeleteChanged: Subscription;

    contentStoreChanged: Subscription;
    contentDeleteChanged: Subscription;

    constructor(private http: HttpClient, private navbarsService: NavbarsService, private contentsService: ContentsService) {

        this.navbarStoreChanged = this.navbarsService.navbarStoreChanged
            .subscribe(
                (navbar: Navbar) => {
                    if (!navbar.id) {
                        this.http
                            .post(this.ipAddress + '/navbars', navbar)
                            .subscribe(response => {
                                this.navbarsService.setNavbar(this.navbarsService.getNavbarIndexById(0), <Navbar>response);
                                console.log(response);
                            });
                    } else {
                        this.http
                            .put(this.ipAddress + '/navbars/' + navbar.id, navbar)
                            .subscribe(response => {
                                console.log(response);
                            });
                    }
                }
            );

        this.navbarDeleteChanged = this.navbarsService.navbarDeleteChanged
            .subscribe(
                (id: number) => {
                    this.http
                        .delete(this.ipAddress + '/navbars/' + id)
                        .subscribe(response => {
                            console.log("Deleted!");
                        });
                }
            );


        this.contentStoreChanged = this.contentsService.contentStoreChanged
            .subscribe(
                (content: Content) => {
                    if (!content.id) {
                        this.http
                            .post(this.ipAddress + '/contents', content)
                            .subscribe(response => {
                                this.contentsService.setContent(this.contentsService.getContentIndexById(0), <Content>response);
                                console.log(response);
                            });
                    } else {
                        this.http
                            .put(this.ipAddress + '/contents/' + content.id, content)
                            .subscribe(response => {
                                console.log(response);
                            });
                    }
                }
            );

        this.contentDeleteChanged = this.contentsService.contentDeleteChanged
            .subscribe(
                (id: number) => {
                    this.http
                        .delete(this.ipAddress + '/contents/' + id)
                        .subscribe(response => {
                            console.log("Deleted!");
                        });
                }
            );
    }

    fetchNavbars() {
        return this.http
            .get<Navbar[]>(this.ipAddress + '/navbars')
            .pipe(
                map(navbars => {
                    return navbars.map(navbar => {
                        return {
                            ...navbar,
                            navitems: navbar.navitems ? navbar.navitems : []
                        };
                    });
                }),
                tap(navbars => {
                    this.navbarsService.setNavbars(navbars);
                })
            )
    }

    fetchContents() {
        return this.http
            .get<Content[]>(this.ipAddress + '/contents')
            .pipe(
                map(contents => {
                    return contents.map(content => {
                        return {
                            ...content
                        };
                    });
                }),
                tap(contents => {
                    this.contentsService.setContents(contents);
                })
            )
    }
}