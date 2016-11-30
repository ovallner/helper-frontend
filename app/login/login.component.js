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
const router_1 = require('@angular/router');
const user_1 = require('../user');
const accounts_service_1 = require('./../accounts.service');
const user_service_1 = require('../user.service');
const http_1 = require('@angular/http');
let AccountLoginComponent = class AccountLoginComponent {
    constructor(accountsService, router, userService, http) {
        this.accountsService = accountsService;
        this.router = router;
        this.userService = userService;
        this.http = http;
        this.title = "Login";
        this._temp = new user_1.User;
    }
    isAccount() {
        if (this.accounts.find(x => x.username === this._temp.username) && this.accounts.find(x => x.password === this._temp.password)) {
            console.log(this._temp);
            this.login();
            return true;
        }
        else {
            console.log("no match");
            this.login();
            return false;
        }
    }
    ;
    login() {
        this.userService.login(this._temp);
        if (this.userService.getUser()) {
            console.log("logged in");
            this.router.navigateByUrl('home');
        }
    }
};
AccountLoginComponent = __decorate([
    core_1.Component({
        selector: 'account-login',
        templateUrl: './app/login/login.html',
        styleUrls: ['./app/login/login.css'],
        providers: [accounts_service_1.AccountsService]
    }), 
    __metadata('design:paramtypes', [accounts_service_1.AccountsService, router_1.Router, user_service_1.UserService, http_1.Http])
], AccountLoginComponent);
exports.AccountLoginComponent = AccountLoginComponent;
//# sourceMappingURL=login.component.js.map