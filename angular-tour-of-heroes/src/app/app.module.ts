import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
//import { AppRoutingModule } from './app-routing.module';
import { BooksComponent } from './books/books.component'
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    BooksComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'heroes', component:HeroesComponent }, 
      { path:'dashboard', component:DashboardComponent }, 
      { path:'detail/:id', component:HeroDetailComponent }, 
      { path:'book', component:BooksComponent},
      { path: '', redirectTo:'/dashboard', pathMatch: 'full'},
      { path: '**', redirectTo:'heroes', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
