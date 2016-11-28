import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ChatService }       from './chat.service';
import { Message } from './message';
import { UserService } from '../user.service';
import { User } from '../user';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'chat-component',
  templateUrl: './app/chat/chat.component.html',
  styleUrls: [ './app/chat/chat.component.css' ],
  providers: [ChatService]
})

export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message_text;
  message_obj;
  user: User;
  temp: any;
  
  constructor(private chatService:ChatService,
              private route: ActivatedRoute,
				      private router: Router,
              private userService: UserService,
              private accountsService: AccountsService) {
                this.user= userService.getUser();
                console.log("chat comp");
                console.log(this.user);
              }
              

  sendMessage(){
    this.message_obj = new Message(this.message_text, this.user.username);
    this.chatService.sendMessage(this.message_obj);
    console.log(this.message_text);
    this.message_text = "";
    
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(x => {
      this.messages.push(JSON.parse(x['text']));
      console.log(this.messages);
    })
    //this.route.params.forEach((params: Params) => {
        //this.user = this.accountsService.getAccount
    //});
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
