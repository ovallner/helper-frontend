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
let AccountsService = class AccountsService {
    constructor() {
        this.accounts = new Array();
        this.accounts.push({ first_name: "Oscar", last_name: "Vallner", username: "ovallner", email: "ovallner@gmail.com", password: "password123", isCounselor: true });
        this.accounts.push({ first_name: "Osco", last_name: "Vallno", username: "ovall", email: "ovallner@gmail.com", password: "password123", isCounselor: true });
        this.accounts.push({ first_name: "Donald", last_name: "Trump", username: "badhombre", email: "placeholder@email.com", password: "password", isCounselor: false });
        this.accounts.push({ first_name: "Donald", last_name: "Trump", username: "the_donald", email: "placeholder@email.com", password: "password", isCounselor: false });
    }
    getAccounts() {
        return this.accounts;
    }
    getAccount(username) {
        var account = this.accounts.find(myUser => myUser.username === username);
        return account;
    }
    addAccount(user) {
        this.accounts.push(user);
    }
};
AccountsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map