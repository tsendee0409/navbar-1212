import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Content } from '../models/content.model';

@Injectable({ providedIn: 'root' })
export class ContentsService {
    contentsChanged = new Subject<Content[]>();
    contentStoreChanged = new Subject<Content>();
    contentDeleteChanged = new Subject<number>();
    private contents: Content[] = [];

    getContents() {
        return this.contents.slice();
    }

    setContents(contents: Content[]) {
        this.contents = contents;
        this.contentsChanged.next(this.contents.slice());
    }

    getContent(index: number) {
        return this.contents[index];
    }

    setContent(index: number, content: Content) {
        this.contents[index] = {...content};
        this.contentsChanged.next(this.contents.slice());
    }

    getContentById(id: number) {
        return this.contents.find(content => content.id == id);
    }

    getContentIndexById(id: number) {
        return this.contents.findIndex(content => content.id == id);
    }

    addContent(content: Content) {
        this.contents.push(content);
        this.contentsChanged.next(this.contents.slice());
        this.contentStoreChanged.next(this.contents[this.contents.length - 1]);
    }

    updateContent(index: number, newContent: Content) {
        this.contents[index] = newContent;
        this.contentsChanged.next(this.contents.slice());
        this.contentStoreChanged.next(this.contents[index]);
    }

    deleteContent(index: number, id: number) {
        this.contentDeleteChanged.next(id);
        this.contents.splice(index, 1);
        this.contentsChanged.next(this.contents.slice());
    }
}