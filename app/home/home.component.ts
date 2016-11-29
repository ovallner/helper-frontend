import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.html',
  styleUrls: [ './app/home/home.css' ],
  providers: [ AccountsService] /** Is the user class a provider */
})

export class HomeComponent { 
	title : string;
    accounts : User[];
    user : User; 

	constructor(private accountsService : AccountsService,
                private router: Router,
                private userService: UserService){
		this.title = "Home";
        this.user = userService.getUser();    
	}
    toChat() {
        this.router.navigateByUrl("chat");
    }

}