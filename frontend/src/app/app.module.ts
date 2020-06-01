import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SortablejsModule } from 'ngx-sortablejs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { NavbarStartComponent } from './navbars/navbar-start/navbar-start.component';
import { NavbarListComponent } from './navbars/navbar-list/navbar-list.component';
import { NavbarEditComponent } from './navbars/navbar-edit/navbar-edit.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeComponent } from './home/home.component';
import { NavbarsResolverService } from './navbars/navbars-resolver.service';
import { ContentsResolverService } from './contents/contents-resolver.service';


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
  { path: 'contents',
    component: ContentsComponent,
    resolve: [ContentsResolverService],
    children: [
      //{ path: '', component: NavbarStartComponent },
      //{ path: 'new', component: NavbarEditComponent },
      //{ path: ':id', component: NavbarEditComponent }
    ]
  },
  { path: 'home', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarsComponent,
    ContentsComponent,
    HomeComponent,
    NavbarStartComponent,
    NavbarListComponent,
    NavbarEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    SortablejsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }