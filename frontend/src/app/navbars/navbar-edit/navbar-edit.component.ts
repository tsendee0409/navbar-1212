import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { faArrowsAlt, faChevronLeft, faChevronRight, faPlus, faEdit, faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

import { NavbarsService } from '../navbars.service';
import { ContentsService } from '../../contents/contents.service';
import { Content } from '../../models/content.model';

@Component({
  selector: 'app-navbar-edit',
  templateUrl: './navbar-edit.component.html',
  styleUrls: ['./navbar-edit.component.css']
})
export class NavbarEditComponent implements OnInit, OnDestroy {
  id: number;
  index: number;
  editMode = false;
  navbarForm: FormGroup;
  contents: Content[];
  subscription: Subscription;

  faArrowsAlt = faArrowsAlt;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faPlus = faPlus;
  faEdit = faEdit;
  faBars = faBars;

  constructor(
    private navbarsService: NavbarsService,
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

    this.route.params.subscribe((params: Params) => {
      this.id = + params['id'];
      this.index = this.navbarsService.getNavbarIndexById(this.id);
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let navbarId = 0;
    let navbarName = '';
    let navbarNavitems = new FormArray([]);

    if (this.editMode) {
      const navbar = this.navbarsService.getNavbar(this.index);
      navbarId = navbar.id;
      navbarName = navbar.name;
      if (navbar['navitems']) {

        let levels = [[], [], [], [], []];

        for (let navitem of navbar.navitems) {
          let linkId = navitem.link ? parseInt(navitem.link.substring(navitem.link.lastIndexOf('/') + 1)) : -1;
          let content = -1 < this.contentsService.getContentIndexById(linkId) ? this.contents[this.contentsService.getContentIndexById(linkId)] : null;

          let parent = navitem.parent;

          if (0 < parent) {
            let parentLevel = levels.findIndex(lvl => {
              return lvl.includes(parent);
            });

            parent = parentLevel + 1;
          }

          levels[parent].push(navitem.id);

          navbarNavitems.push(
            new FormGroup({
              id: new FormControl(navitem.id),
              name: new FormControl({ value: navitem.name, disabled: !navitem.published }, Validators.required),
              parent: new FormControl(navitem.parent),
              published: new FormControl(navitem.published),
              linked: new FormControl({ value: navitem.linked, disabled: !navitem.published }),
              link: new FormControl({ value: navitem.link, disabled: !navitem.published || navitem.linked }),
              sort: new FormControl(navitem.sort),
              level: new FormControl(parent),
              contents: new FormControl({ value: content, disabled: !navitem.published || !navitem.linked })
            })
          );
        }
      }
    }

    this.navbarForm = new FormGroup({
      id: new FormControl(navbarId),
      name: new FormControl(navbarName, Validators.required),
      navitems: navbarNavitems
    });
  }

  get navitemsControls() {
    return (<FormArray>this.navbarForm.get('navitems')).controls;
  }

  // --- Level ----------------------------------------------------------------------------

  onMoveLeft(index: number) {
    let level = this.navitemsControls[index].value['level'];

    level = 0 < level ? level - 1 : 0;
    this.setMove(index, level);
  }

  onMoveRight(index: number) {
    let level = this.navitemsControls[index].value['level'];

    level = level < 1 ? level + 1 : 2;
    this.setMove(index, level);
  }

  setMove(index: number, value: number) {
    this.navitemsControls[index].patchValue({ level: value });
  }

  getStyle(index: number) {
    let level = this.navitemsControls[index].value['level'];
    return (level * 50) + 'px';
  }

  // -------------------------------------------------------------------------------

  onSubmit() {
    this.navitemsControls.forEach((navitem, index) => {

      let level = index == 0 ? 0 : navitem.value['level'];
      if (0 < level) {
        let i = index - 1;
        while (0 <= i) {
          let control = this.navitemsControls[i];

          if (control.value['level'] < level) {
            level = control.value['id'];
            break;
          }

          i--;
        }
      }

      navitem.enable();
      navitem.patchValue({ parent: level, sort: index });
    });

    if (this.editMode) {
      this.navbarsService.updateNavbar(this.index, this.navbarForm.value);
    } else {
      this.navbarsService.addNavbar(this.navbarForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDelete() {
    let deleteConfirm = confirm("Менюг устгах уу?");
    if (!deleteConfirm) return;
    this.navbarsService.deleteNavbar(this.index, this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddNavitem() {
    (<FormArray>this.navbarForm.get('navitems')).push(
      new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null, Validators.required),
        parent: new FormControl(0),
        published: new FormControl(true),
        linked: new FormControl(false),
        link: new FormControl('#'),
        sort: new FormControl(0),
        level: new FormControl(0),
        contents: new FormControl({ value: null, disabled: true })
      })
    );
  }

  onDeleteNavitem(index: number) {
    (<FormArray>this.navbarForm.get('navitems')).removeAt(index);
  }

  onChangeContents(index: number) {
    let content = this.navitemsControls[index].value['contents'];
    this.navitemsControls[index].patchValue({ link: '/home/read/' + content.id });
  }

  onSetDisabled(index: number) {

    let controls = this.navitemsControls[index]['controls'];

    let name = controls['name'];
    let published = controls['published'];
    let linked = controls['linked'];
    let link = controls['link'];
    let contents = controls['contents'];

    if (published.value) {
      name.enable();
      linked.enable();
      if (linked.value) {
        link.disable();
        contents.enable();
      } else {
        link.enable();
        contents.disable();
      }
    } else {
      name.disable();
      linked.disable();
      link.disable();
      contents.disable();
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
