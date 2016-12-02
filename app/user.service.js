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
const accounts_service_1 = require('./accounts.service');
let UserService = class UserService {
    constructor(accountsService) {
        this.accountsService = accountsService;
        accountsService.list()
            .then(x => this.accounts = x);
        console.log(this.accounts);
        this.isAuthenticated = false;
    }
    login(auth_user) {
        console.log("Attempting to Log in!");
        console.log(auth_user);
        this.accountsService.list()
            .then(x => this.accounts = x);
        let temp = this.accounts.find(myObj => myObj.username == auth_user.username);
        console.log("asdf");
        console.log(temp);
        if (temp.password == auth_user.password) {
            this.user = temp;
            console.log(this.user);
            this.isAuthenticated = true;
        }
        else {
            console.log("login unsuccessful");
        }
    }
    ;
    getUser() {
        console.log(this.user);
        return this.user;
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [accounts_service_1.AccountsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map