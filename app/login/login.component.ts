import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { UserService } from '../user.service';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'account-login',
  templateUrl: './app/login/login.html',
  styleUrls: [ './app/login/login.css' ],
  providers: [AccountsService]
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
                private userService: UserService,
                private http: Http){

		this.title = "Login";
        this._temp = new User;        
	}
    isAccount() {
        if(this.accounts.find(x => x.username === this._temp.username) && this.accounts.find(x => x.password === this._temp.password)) {
            console.log(this._temp);
            this.login();
            return true;
        } else {
                        console.log("no match");
            this.login();
            return false; 
        }
    }; 

    login() {
        this.userService.login(this._temp);


        if(this.userService.getUser()) {
            console.log("logged in");
            this.router.navigateByUrl('home');
        }
    }
    

}
