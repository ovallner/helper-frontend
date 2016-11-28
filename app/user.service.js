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
        this.isAuthenticated = false;
        this.accounts = accountsService.getAccounts();
    }
    isAccount(username, password) {
        if (this.accounts.find(temp => temp.username === username) && this.accounts.find(temp => temp.password === password)) {
            this.user = this.accounts.find(temp => temp.username === username);
            this.login(this.user);
            console.log(this.user);
            return true;
        }
        else {
            return false;
        }
    }
    ;
    login(auth_user) {
        console.log("Attempting to Log in!");
        this.user = auth_user;
        console.log(this.user);
        this.isAuthenticated = true;
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