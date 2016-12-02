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
let AccountCreateComponent = class AccountCreateComponent {
    constructor(accountsService, route, router) {
        this.accountsService = accountsService;
        this.route = route;
        this.router = router;
        this.title = "Create An Account";
        this._temp = new user_1.User;
        /** clear temp */
    }
    ;
    checkName(id) {
        var onload = (data) => {
            if (data) {
                return false;
            }
            else {
                return true;
            }
        };
        this.accountsService.get(id)
            .then(onload);
    }
    returnToList(message) {
        this.router.navigateByUrl('/')
            .then(() => alert(message));
    }
    setRole(role) {
        if (role == "counselor") {
            this._temp.isCounselor = true;
        }
        else {
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
    }
    ;
};
AccountCreateComponent = __decorate([
    core_1.Component({
        selector: 'account-create',
        templateUrl: './app/create-an-account/create-an-account.html',
        styleUrls: ['./app/create-an-account/create-an-account.css'],
        providers: [accounts_service_1.AccountsService]
    }), 
    __metadata('design:paramtypes', [accounts_service_1.AccountsService, router_1.ActivatedRoute, router_1.Router])
], AccountCreateComponent);
exports.AccountCreateComponent = AccountCreateComponent;
//# sourceMappingURL=create-an-account.component.js.map