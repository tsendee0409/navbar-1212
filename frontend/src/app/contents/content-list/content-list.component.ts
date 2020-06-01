import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { Content } from '../../models/content.model';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  contents: Content[];
  faCalendar = faCalendar;

  constructor(
    private contentsService: ContentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.contentsService.contentsChanged
      .subscribe(
        (contents: Content[]) => {
          this.contents = contents;
        }
      );
    this.contents = this.contentsService.getContents();
  }

  onNewContent() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
