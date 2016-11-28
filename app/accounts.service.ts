import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class AccountsService {

	accounts : User[];

	constructor(){
		this.accounts = new Array<User>();
		this.accounts.push({first_name: "Oscar", last_name: "Vallner", username: "ovallner", email: "ovallner@gmail.com", password: "password123", isCounselor: true});
		this.accounts.push({first_name: "Osco", last_name: "Vallno", username: "ovall", email: "ovallner@gmail.com", password: "password123", isCounselor: true});
		this.accounts.push({first_name: "Donald", last_name: "Trump", username: "badhombre", email: "placeholder@email.com", password: "password", isCounselor: false});
		this.accounts.push({first_name: "Donald", last_name: "Trump", username: "the_donald", email: "placeholder@email.com", password: "password", isCounselor: false});
	}

	getAccounts() : any[] {
		return this.accounts;
	}

	getAccount(username : string) : any {
		var account = this.accounts.find(myUser => myUser.username === username);
		return account;
	}

    addAccount(user : User) {
        this.accounts.push(user);
    }

}
