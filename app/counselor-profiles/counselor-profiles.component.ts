import { Component } from '@angular/core';
import { User } from '../user';
import { AccountsService } from './../accounts.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UserService } from '../user.service';

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

	constructor(private accountsService : AccountsService, 
        private route: ActivatedRoute, 
        private router: Router,
        private userService: UserService) {
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
                isCounselor: false,
                years: "",
                expertise: ""
            },
            {
                first_name: "Joe",
                last_name: "James",
                username: "joe",
                email: "joke@smu.edu",
                password: "sdf",
                isCounselor: true,
                years: "",
                expertise: ""
            },
            {
                first_name: "Mom",
                last_name: "Dad",
                username: "hi",
                email: "hi@smu.edu",
                password: "yas",
                isCounselor: false,
                years: "",
                expertise: ""
            },
            {
                first_name: "Cristelle",
                last_name: "Elias",
                username: "cris",
                email: "cris@smu.edu",
                password: "no",
                isCounselor: false,
                years: "",
                expertise: ""
            },
        ]
        this._temp = new User; 
        console.log(this.showingCounselors);
        

        /** clear temp */
	};
          toHome() {
        this.router.navigateByUrl("home");
    }

    toChat() {
        this.router.navigateByUrl("chat");
    }

}
