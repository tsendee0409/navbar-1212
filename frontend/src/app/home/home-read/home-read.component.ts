import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { ContentsService } from '../../contents/contents.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-home-read',
  templateUrl: './home-read.component.html',
  styleUrls: ['./home-read.component.css']
})
export class HomeReadComponent implements OnInit {
  id: number;
  content: Content;
  faCalendar = faCalendar;

  constructor(
    private contentsService: ContentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
      this.content = this.contentsService.getContentById(this.id);
    });
  }

}
