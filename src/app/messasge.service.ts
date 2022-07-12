import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessasgeService {

  messages: string[] = [];

  add(message: string){
    this.messages.push(message);
  }

  deleteAll(){
    this.messages = [];
  }

  constructor() { }
}
