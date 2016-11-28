import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'account-create',
  templateUrl: './app/create-an-account/create-an-account.html',
  styleUrls: [ './app/create-an-account/create-an-account.css' ],
  providers: [ AccountsService ]  
})

export class AccountCreateComponent { 
	title : string;
    accounts : User[];
    _temp : User;

	constructor(private accountsService : AccountsService){
		this.title = "Create An Account";
        this.accounts = accountsService.getAccounts();
        this._temp = new User; 
        /** clear temp */
	};

    createAccount() {

       this.accountsService.addAccount(this._temp);
        /** clear temp */
        console.log("I have been clicked");
        console.log(this._temp);
        console.log(this.accountsService.accounts);
    };

}
