import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'counselor-profiles',
  templateUrl: './app/counselor-profiles/counselor-profiles.html',
  styleUrls: [ './app/counselor-profiles/counselor-profiles.css' ],
  providers: [ AccountsService ]  
})

export class CounselorProfilesComponent { 
	title : string;
    counselors : User[];
    showingCounselors : User[];
    _temp : User;

	constructor(private accountsService : AccountsService, private route: ActivatedRoute, private router: Router){
		this.title = "Choose a Counselor";
        accountsService.list()
			.then(x => this.counselors = x);
        this.showingCounselors = this.counselors; 

        this.showingCounselors = [
{
                first_name: "Jacquie",
                last_name: "Elias",
                username: "jacquie",
                email: "jelias@smu.edu",
                password: "yas",
                isCounselor: false
            },
            {
                first_name: "Joe",
                last_name: "James",
                username: "joe",
                email: "joke@smu.edu",
                password: "sdf",
                isCounselor: true
            },
            {
                first_name: "Mom",
                last_name: "Dad",
                username: "hi",
                email: "hi@smu.edu",
                password: "yas",
                isCounselor: false
            },
            {
                first_name: "Cristelle",
                last_name: "Elias",
                username: "cris",
                email: "cris@smu.edu",
                password: "no",
                isCounselor: false
            },
        ]
        this._temp = new User; 
        console.log(this.showingCounselors);
        

        /** clear temp */
	};

    toChat() {
        this.router.navigateByUrl("chat");
    }

}
