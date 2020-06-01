import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

import { ContentsService } from '../../contents/contents.service';

@Component({
  selector: 'app-content-edit',
  templateUrl: './content-edit.component.html',
  styleUrls: ['./content-edit.component.css']
})
export class ContentEditComponent implements OnInit {
  id: number;
  index: number;
  editMode = false;
  contentForm: FormGroup;

  faPlus = faPlus;
  faEdit = faEdit;

  constructor(
    private contentsService: ContentsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
      this.index = this.contentsService.getContentIndexById(this.id);
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let contentId = 0;
    let contentName = '';
    let contentPublished = false;
    let contentText = '';
    let contentCreatedAt = new Date('2020-01-01');
    let contentUpdatedAt = new Date('2020-01-01');

    if (this.editMode) {
      const content = this.contentsService.getContent(this.index);
      contentId = content.id;
      contentName = content.name;
      contentPublished = content.published;
      contentText = content.contentText;
      contentCreatedAt = content.createdAt;
      contentUpdatedAt = content.updatedAt;
    }

    this.contentForm = new FormGroup({
      id: new FormControl(contentId),
      name: new FormControl(contentName, Validators.required),
      published: new FormControl(contentPublished),
      contentText: new FormControl(contentText),
      createdAt: new FormControl(contentCreatedAt),
      updatedAt: new FormControl(contentUpdatedAt)
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.contentsService.updateContent(this.index, this.contentForm.value);
    } else {
      this.contentsService.addContent(this.contentForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDelete() {
    let deleteConfirm = confirm("Агуулгыг устгах уу?");
    if (!deleteConfirm) return;
    this.contentsService.deleteContent(this.index, this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
