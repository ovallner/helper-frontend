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
    }


    login(auth_user) {
        console.log("Attempting to Log in!");
        this.accountsService.login(auth_user)
        .then(x => this.user = x);
        if (this.user) {
            console.log(this.user);
            this.isAuthenticated = true;
        }

    };

    getUser() : any{
        console.log(this.user);
        return this.user;
    }
}