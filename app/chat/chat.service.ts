import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:5000';  
  private socket;
  
  constructor() {
    
  }


  sendMessage(message_obj){
    this.socket.emit('add-message', JSON.stringify(message_obj));    
  }
  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };
    })     
    return observable;
  }  
}