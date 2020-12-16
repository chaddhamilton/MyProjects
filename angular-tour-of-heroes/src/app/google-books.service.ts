
import { Inject, Injectable, OnInit } from '@angular/core';
import {Hero, ResponseObj, UserModel, UserModelResponse} from "./models/hero"
import{GoogleBookSearch, Item} from './models/googlebooksearch'

import {Observable, of, pipe, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {MessageService} from './messages/messages.service';
import { AppSettingsService } from './shared/appsettings.service';
import { AppSettings } from './shared/appsetting';


@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
  public GooglepIUrl: string = ""
  public GoogleKey: string = ""
  
  settings:AppSettings;

  constructor(private http: HttpClient, private appSettingsService:AppSettingsService) {
    this.GooglepIUrl=appSettingsService.getSettings().GoogleBooksIUrl;
    this.GoogleKey = appSettingsService.getSettings().googleApiKey;
   }

  
}
