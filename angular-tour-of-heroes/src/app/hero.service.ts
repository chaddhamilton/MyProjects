import { Inject, Injectable, OnInit } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero, ResponseObj, UserModel, UserModelResponse} from "./models/hero"
import {Observable, of, pipe, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {MessageService} from './messages/messages.service';
import { AppSettingsService } from './shared/appsettings.service';
import { AppSettings } from './shared/appsetting';
import { JsonPipe } from '@angular/common';
 
 
@Injectable({
  providedIn: 'root'
})

export class HeroService  {
  public BookerApIUrl: string = ""
  public heros : Hero[];
  public responseObj :ResponseObj;
  public appSettings :AppSettings;
  public test: Hero[];

   constructor(
              private http:HttpClient,
              private meessageService:MessageService,
              private appSettingService: AppSettingsService
             ) 
             
    { 

   this.heros = HEROES;
   this.appSettings = this.appSettingService.getSettings();
   this.BookerApIUrl = this.appSettings.BookerApIUrl;
  }


getHeroes() : Observable<Hero[]> {
    return this.http.get<Hero[]>(this.BookerApIUrl+'hero');
 }

getHeroesFlat() : Observable<Hero[]> {
  let rest=this.http.get<ResponseObj>(this.BookerApIUrl+'hero/getAllHeroes')
  .pipe(
  map(x => x.payLoad.filter(f => f.id>13)),
  catchError(this.handleError)
);

this.meessageService.addMessage("Retrieved Heroes 1");
return rest;
}

getHero(id:number) :Observable<Hero>
{
  this.meessageService.addMessage("Retrieved Hero2" );
  return this.http.get<Hero>(this.BookerApIUrl+'hero/'+ id);
}


handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}

}
