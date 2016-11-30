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
const platform_browser_1 = require('@angular/platform-browser');
const forms_1 = require('@angular/forms');
const router_1 = require('@angular/router');
const http_1 = require('@angular/http');
const angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
const chat_component_1 = require('./chat/chat.component');
const app_component_1 = require('./app.component');
const create_an_account_component_1 = require('./create-an-account/create-an-account.component');
const login_component_1 = require('./login/login.component');
//import { DashboardCounselorComponent } from './dashboard-counselor/dashboard-counselor';
//import { DashboardPatientComponent } from './dashboard-patient/dashboard-patient';
const user_service_1 = require('./user.service');
const accounts_service_1 = require('./accounts.service');
const chat_landing_component_1 = require('./chat/chat-landing.component');
const home_component_1 = require('./home/home.component');
const mock_api_service_1 = require('./mock-api.service');
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', component: login_component_1.AccountLoginComponent },
                { path: 'register', component: create_an_account_component_1.AccountCreateComponent },
                { path: 'chat', component: chat_component_1.ChatComponent },
                { path: 'chatrooms', component: chat_landing_component_1.ChatLanding },
                { path: 'home', component: home_component_1.HomeComponent }
            ]),
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(mock_api_service_1.MockApiService)
        ],
        declarations: [
            app_component_1.AppComponent,
            login_component_1.AccountLoginComponent,
            create_an_account_component_1.AccountCreateComponent,
            chat_landing_component_1.ChatLanding,
            chat_component_1.ChatComponent,
            home_component_1.HomeComponent
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [user_service_1.UserService, accounts_service_1.AccountsService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map