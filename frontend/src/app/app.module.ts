import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortablejsModule } from 'ngx-sortablejs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditorModule } from '@tinymce/tinymce-angular';

import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { NavbarStartComponent } from './navbars/navbar-start/navbar-start.component';
import { NavbarListComponent } from './navbars/navbar-list/navbar-list.component';
import { NavbarEditComponent } from './navbars/navbar-edit/navbar-edit.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { NavbarsResolverService } from './navbars/navbars-resolver.service';
import { ContentsResolverService } from './contents/contents-resolver.service';
import { ContentEditComponent } from './contents/content-edit/content-edit.component';
import { ContentListComponent } from './contents/content-list/content-list.component';
import { ContentStartComponent } from './contents/content-start/content-start.component';
import { HomeNavbarComponent } from './home/home-navbar/home-navbar.component';
import { HomeReadComponent } from './home/home-read/home-read.component';
import { HomeStartComponent } from './home/home-start/home-start.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'navbars',
    component: NavbarsComponent,
    resolve: [NavbarsResolverService, ContentsResolverService],
    children: [
      { path: '', component: NavbarStartComponent },
      { path: 'new', component: NavbarEditComponent },
      { path: ':id', component: NavbarEditComponent }
    ]
  },
  { 
    path: 'contents',
    component: ContentsComponent,
    resolve: [ContentsResolverService],
    children: [
      { path: '', component: ContentStartComponent },
      { path: 'new', component: ContentEditComponent },
      { path: ':id', component: ContentEditComponent }
    ]
  },
  { 
    path: 'home',
    component: HomeComponent,
    resolve: [NavbarsResolverService, ContentsResolverService],
    children: [
      { path: '', component: HomeStartComponent },
      { path: 'read/:id', component: HomeReadComponent }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    ContentsComponent,
    HomeComponent,
    NavbarStartComponent,
    NavbarListComponent,
    NavbarEditComponent,
    ContentEditComponent,
    ContentListComponent,
    ContentStartComponent,
    HomeNavbarComponent,
    HomeReadComponent,
    HomeStartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    SortablejsModule,
    FontAwesomeModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }