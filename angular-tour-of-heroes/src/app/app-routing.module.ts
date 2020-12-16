import { NgModule } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { BooksComponent } from './books/books.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path:'heroes', component:HeroesComponent }, 
  { path:'book', component:BooksComponent} 
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})

export class AppRoutingModule {
 }
