import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'chat-landing',
  templateUrl: './app/chat/chat-landing.html',
  styleUrls: [ './app/chat/chat-landing.css' ],
})

export class ChatLanding {
    accounts: User[];
    authUser: User;
    counselorAccounts: User[];
    

    constructor(private userService: UserService,
                private router: Router,
                private accountsService: AccountsService){
        
        this.accountsService.list()
        .then(x => this.accounts = x);
        this.authUser = userService.getUser();
        this.counselorAccounts = [];
        if(!this.authUser.isCounselor)
        {
            this.accounts.forEach(account => {
                if (account.isCounselor)
                {
                    this.counselorAccounts.push(account);
                }
            });
        }
    }

}