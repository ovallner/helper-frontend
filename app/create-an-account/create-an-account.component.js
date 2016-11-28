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
let AccountCreateComponent = class AccountCreateComponent {
    constructor(accountsService) {
        this.accountsService = accountsService;
        this.title = "Create An Account";
        this.accounts = accountsService.getAccounts();
        this._temp = new user_1.User;
        /** clear temp */
    }
    ;
    createAccount() {
        this.accountsService.addAccount(this._temp);
        /** clear temp */
        console.log("I have been clicked");
        console.log(this._temp);
        console.log(this.accountsService.accounts);
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
    __metadata('design:paramtypes', [accounts_service_1.AccountsService])
], AccountCreateComponent);
exports.AccountCreateComponent = AccountCreateComponent;
//# sourceMappingURL=create-an-account.component.js.map