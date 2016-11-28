import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './app/home/home.html',
  styleUrls: [ './app/home/home.css' ],
  providers: [ AccountsService ] /** Is the user class a provider */
})

export class HomeComponent { 
	title : string;
    accounts : User[];
    user : User; 

	constructor(private accountsService : AccountsService,
                private router: Router,){
		this.title = "Home";
        this.user = new User;    
	}
    toChat() {
        this.router.navigateByUrl("chat");
    }

}