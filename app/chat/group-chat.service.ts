import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Message } from './message';
import { Http } from '@angular/http';
import * as io from 'socket.io-client';

export class GroupChatService {
  private url = 'http://localhost:5000';  
  private socket;
  private nsp;
  private chatname;
  constructor() {
    
  }

  createChat(chatName){
      var socketOut = io.connect('http://yourdomain:1337/'););
      socketOut.emit('groupConnect', chatName);
      this.chatname = chatName;
  }

    setTimeout(function(){
        this.socket = io.connect(this.url + this.chatname);
        this.socket.on('message', function(msg){
            displayMessage(msg);
        }
        this.nsp = '/' + this.chatname;
    }, 1500);


    displayMessage(msg) {

    }
}