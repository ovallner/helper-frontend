import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { UserService } from '../user.service';
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

	constructor(private accountsService : AccountsService, 
                private route: ActivatedRoute, 
                private router: Router,
                private userService: UserService){
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

    checkIfLogged(){
        if(this.userService.getUser()) {
            console.log("logged in");
            this.router.navigateByUrl('home');
        }
    }
    createAccount() {
        this.accountsService.add(this._temp);
        this.userService.setUser(this._temp);
        this.checkIfLogged();

    };


}
