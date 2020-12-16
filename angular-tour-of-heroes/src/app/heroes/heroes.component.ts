import { Component, OnInit } from '@angular/core';
import {Hero, ResponseObj} from '../models/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
 
  public heroes:Hero[]; 

  constructor(private heroservice: HeroService) {}
 
  ngOnInit(): void {
    console.log("subscribing");
    this.heroservice.getHeroesFlat() .subscribe(h => this.heroes=h);
  }

}
