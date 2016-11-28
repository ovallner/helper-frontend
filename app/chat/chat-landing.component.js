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
const accounts_service_1 = require('./../accounts.service');
const user_service_1 = require('../user.service');
let ChatLanding = class ChatLanding {
    constructor(userService, router, accountsService) {
        this.userService = userService;
        this.router = router;
        this.accountsService = accountsService;
        this.accounts = accountsService.getAccounts();
        this.authUser = userService.getUser();
        this.counselorAccounts = [];
        if (!this.authUser.isCounselor) {
            this.accounts.forEach(account => {
                if (account.isCounselor) {
                    this.counselorAccounts.push(account);
                }
            });
        }
    }
};
ChatLanding = __decorate([
    core_1.Component({
        selector: 'chat-landing',
        templateUrl: './app/chat/chat-landing.html',
        styleUrls: ['./app/chat/chat-landing.css'],
    }), 
    __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, accounts_service_1.AccountsService])
], ChatLanding);
exports.ChatLanding = ChatLanding;
//# sourceMappingURL=chat-landing.component.js.map