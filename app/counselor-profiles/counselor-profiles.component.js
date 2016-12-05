"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const user_1 = require('../user');
const accounts_service_1 = require('./../accounts.service');
const router_1 = require('@angular/router');
const user_service_1 = require('../user.service');
let CounselorProfilesComponent = class CounselorProfilesComponent {
    constructor(accountsService, route, router, userService) {
        this.accountsService = accountsService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.title = "Choose a Counselor";
        this.accountsService.list()
            .then(x => this.counselors = x);
        this._temp = this.userService.getUser();
        this.userIsCounselor = this._temp.isCounselor;
        /*for(let counselor in this.counselors) {
            console.log(counselor);
            if (counselor.isCounselor != this.userIsCounselor) {
                this.showingCounselors.push(counselor);
            }
        }*/
        this.showingCounselors = this.counselors;
        /*this.showingCounselors = [
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
        ]*/
        this._temp = new user_1.User;
        console.log(this.showingCounselors);
        /** clear temp */
    }
    ;
    toHome() {
        this.router.navigateByUrl("home");
    }
    toChat() {
        this.router.navigateByUrl("chat");
    }
};
CounselorProfilesComponent = __decorate([
    core_1.Component({
        selector: 'counselor-profiles',
        templateUrl: './app/counselor-profiles/counselor-profiles.html',
        styleUrls: ['./app/counselor-profiles/counselor-profiles.css'],
        providers: [accounts_service_1.AccountsService]
    }), 
    __metadata('design:paramtypes', [accounts_service_1.AccountsService, router_1.ActivatedRoute, router_1.Router, user_service_1.UserService])
], CounselorProfilesComponent);
exports.CounselorProfilesComponent = CounselorProfilesComponent;
//# sourceMappingURL=counselor-profiles.component.js.map