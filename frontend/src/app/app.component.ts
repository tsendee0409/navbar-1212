import { Component } from '@angular/core';
import { faHome, faBars, faList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  faHome = faHome;
  faBars = faBars;
  faList = faList;
}
