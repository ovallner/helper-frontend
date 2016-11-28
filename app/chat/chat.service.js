"use strict";
const Observable_1 = require('rxjs/Observable');
const io = require('socket.io-client');
class ChatService {
    constructor() {
        this.url = 'http://localhost:5000';
    }
    sendMessage(message_obj) {
        this.socket.emit('add-message', JSON.stringify(message_obj));
    }
    getMessages() {
        let observable = new Observable_1.Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', (data) => {
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
exports.ChatService = ChatService;
//# sourceMappingURL=chat.service.js.map