import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from './user';
import { AccountsService } from './accounts.service';

@Injectable()
export class UserService {
    isAuthenticated: boolean;
    private user: any;
    private accounts: any[];

    constructor(private accountsService : AccountsService){
        accountsService.list()
        .then(x => this.accounts = x);
        console.log(this.accounts);
        this.isAuthenticated = false;
    }


    login(auth_user) {
        console.log("Attempting to Log in!");
        console.log(auth_user);

        this.accountsService.list()
        .then(x => this.accounts = x);
        let temp = this.accounts.find(myObj => myObj.username == auth_user.username);
        console.log("asdf");
        console.log(temp);
        if (temp.password == auth_user.password) {
            this.user = temp;
            console.log(this.user);
            this.isAuthenticated = true;
            return true;
        }
        else {
            console.log("login unsuccessful");
            return false;
        }

    };

    getUser() : any{
        console.log(this.user);
        return this.user;
    }

    setUser(newUser) {
        this.user = newUser;
    }
}