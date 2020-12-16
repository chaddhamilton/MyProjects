import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppSettings } from './appsetting';

@Injectable({
  providedIn: 'root'
})

//https://stackoverflow.com/questions/36568388/observable-of-is-not-a-function
export class AppSettingsService {

  constructor() { }
  getSettingsObservable() : Observable<AppSettings> {
    let settings = new AppSettings();
    return of<AppSettings>(settings);
  }

  getSettings() : AppSettings {
    let settings = new AppSettings();
    return settings;
  }

}
