import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Content } from '../models/content.model';
import { DataStorageService } from '../data-storage.service';
import { ContentsService } from './contents.service';

@Injectable({ providedIn: 'root' })
export class ContentsResolverService implements Resolve<Content[]> {
    constructor(
        private dataStorageService: DataStorageService,
        private contentsService: ContentsService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const contents = this.contentsService.getContents();

        if (contents.length === 0) {
            return this.dataStorageService.fetchContents();
        } else {
            return contents;
        }
    }
}
