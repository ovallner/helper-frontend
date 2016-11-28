import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';
import { AccountsService } from './accounts.service';

@Injectable()
export class UserService {
    isAuthenticated: boolean;
    private user: any;
    private accounts: User[];

    constructor(private accountsService : AccountsService){
        this.isAuthenticated = false;
        this.accounts = accountsService.getAccounts();
    }
    isAccount(username, password) {
        if(this.accounts.find(temp => temp.username === username) && this.accounts.find(temp => temp.password === password)) {
            this.user = this.accounts.find(temp => temp.username === username);
            this.login(this.user);
            console.log(this.user);
            return true;
        } else {
            return false; 
        }
    }; 

    login(auth_user) {
        console.log("Attempting to Log in!");
        this.user = auth_user;
        console.log(this.user);
        this.isAuthenticated = true;
    };

    getUser() : any{
        console.log(this.user);
        return this.user;
    }
}