import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Hero } from '../models/hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages/messages.service';

@Component({  
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
 id :number;
 @Input() hero:Hero;
  
  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private heroService: HeroService,
    private messageService:MessageService
    ) 
   {

   }
     
  ngOnInit(): void {
    //use Subscription to observe any change of the Id param value
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')
    })
          
    this.getHero(); 
  
  }     
  
    getHero() : void{
      //get the ID from the url
     // const id = +this.route.snapshot.paramMap.get['id'];
      this.heroService.getHero(this.id).subscribe(h => this.hero =h);
      console.log("ID:" + this.id);
      console.log("Active Route:" + this.route);
      this.messageService.addMessage("Getting Hero");
    }

    SaveDeets(detailForm:NgForm):void{

      this.messageService.addMessage("Saving Hero: " + this.hero.name);
    }

}
