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
const accounts_service_1 = require('./../accounts.service');
const router_1 = require('@angular/router');
const user_service_1 = require('../user.service');
let HomeComponent = class HomeComponent {
    constructor(accountsService, router, userService) {
        this.accountsService = accountsService;
        this.router = router;
        this.userService = userService;
        this.title = "Home";
        this.user = userService.getUser();
    }
    toChat() {
        this.router.navigateByUrl("chat");
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './app/home/home.html',
        styleUrls: ['./app/home/home.css'],
        providers: [accounts_service_1.AccountsService] /** Is the user class a provider */
    }), 
    __metadata('design:paramtypes', [accounts_service_1.AccountsService, router_1.Router, user_service_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map