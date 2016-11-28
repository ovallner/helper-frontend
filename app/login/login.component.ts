import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { UserService } from '../user.service';

@Component({
  selector: 'account-login',
  templateUrl: './app/login/login.html',
  styleUrls: [ './app/login/login.css' ],
})

export class AccountLoginComponent { 
	title : string;
    accounts : User[];

    _temp : {
        username: string;
        password: string;
    };

	constructor(private accountsService : AccountsService,
                private router: Router,
                private userService: UserService){
		this.title = "Login";
        this._temp = new User;        
	}
    login() {
        if(this.userService.isAccount(this._temp.username, this._temp.password)) {
            this.router.navigateByUrl('chat');
        }
    }
    

}
