import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

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

	constructor(private accountsService : AccountsService, private route: ActivatedRoute, private router: Router){
		this.title = "Create An Account";
        accountsService.list()
			.then(x => this.accounts = x);
        this._temp = new User; 
        /** clear temp */
	};


    createAccount() {
        this.accountsService.add(this._temp)
			.then(() => this.router.navigateByUrl('/home'));
        /** clear temp */
        console.log("I have been clicked");
        console.log(this._temp);
    };


}
