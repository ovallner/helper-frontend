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
const chat_service_1 = require('./chat.service');
const message_1 = require('./message');
const user_service_1 = require('../user.service');
const accounts_service_1 = require('../accounts.service');
let ChatComponent = class ChatComponent {
    constructor(chatService, route, router, userService, accountsService) {
        this.chatService = chatService;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.accountsService = accountsService;
        this.messages = [];
        this.user = userService.getUser();
        console.log("chat comp");
        console.log(this.user);
    }
    sendMessage() {
        this.message_obj = new message_1.Message(this.message_text, this.user.username);
        this.chatService.sendMessage(this.message_obj);
        console.log(this.message_text);
        this.message_text = "";
    }
    ngOnInit() {
        this.connection = this.chatService.getMessages().subscribe(x => {
            this.messages.push(JSON.parse(x['text']));
            console.log(this.messages);
        });
        //this.route.params.forEach((params: Params) => {
        //this.user = this.accountsService.getAccount
        //});
    }
    ngOnDestroy() {
        this.connection.unsubscribe();
    }
};
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat-component',
        templateUrl: './app/chat/chat.component.html',
        styleUrls: ['./app/chat/chat.component.css'],
        providers: [chat_service_1.ChatService]
    }), 
    __metadata('design:paramtypes', [chat_service_1.ChatService, router_1.ActivatedRoute, router_1.Router, user_service_1.UserService, accounts_service_1.AccountsService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map