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
    _temp : User;
    role : string;

	constructor(private accountsService : AccountsService, private route: ActivatedRoute, private router: Router){
		this.title = "Create An Account";
        this._temp = new User; 
        /** clear temp */
	};

    checkName(id) {
        var onload = (data) => {
			if(data){
                return false;
			} else {
				return true; 
			}
		};
        this.accountsService.get(id) 
            .then(onload);

    }

    private returnToList(message){
		this.router.navigateByUrl('/')
			.then(() => alert(message));
	}

    setRole(role) {
        if(role == "counselor") {
            this._temp.isCounselor = true;
        } else {
            this._temp.isCounselor = false; 
        }
        console.log("i have been clicked in setrole");
    }


    createAccount() {
        this.accountsService.add(this._temp)
			.then(() => this.router.navigateByUrl('/home'));
        /** clear temp */
        console.log("I have been clicked");
        console.log(this._temp);
    };


}
