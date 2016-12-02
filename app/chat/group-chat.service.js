"use strict";
const io = require('socket.io-client');
class GroupChatService {
    constructor() {
        this.url = 'http://localhost:5000';
    }
    createChat(chatName) {
        var socketOut = io.connect('http://yourdomain:1337/');
        ;
        socketOut.emit('groupConnect', chatName);
        this.chatname = chatName;
    }
    setTimeout() { }
    function() {
        this.socket = io.connect(this.url + this.chatname);
        this.socket.on('message', function (msg) {
            displayMessage(msg);
        }, this.nsp = '/' + this.chatname);
    }
    ;
    displayMessage(msg) {
    }
}
exports.GroupChatService = GroupChatService;
//# sourceMappingURL=group-chat.service.js.map