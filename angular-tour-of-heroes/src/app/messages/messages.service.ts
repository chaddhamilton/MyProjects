import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  //empty array
  messages: string[] =[];

  constructor() { }
  
  //ADD the Message
  addMessage(message){
    this.messages.push(message);
  }
  
  //CLEAR the Messages
  clear(){
    this.messages = [];
  }

}
