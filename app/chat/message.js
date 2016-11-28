"use strict";
class Message {
    constructor(body, user) {
        let tempDate = new Date();
        let hours = tempDate.getHours();
        let mins = tempDate.getMinutes();
        let secs = tempDate.getSeconds();
        this.timestamp = "" + hours + ":" + mins + ":" + secs;
        this.body = body;
        this.user = user;
    }
    // constructor(message_obj) {
    //     this.body = message_obj['body'];
    //     this.user = message_obj['user'];
    //     this.timestamp = message_obj['timestamp'];
    // } 
    serialize() {
        let message = {
            body: this.body,
            user: this.user,
            timestamp: this.timestamp
        };
        return JSON.stringify(message);
    }
}
exports.Message = Message;
//# sourceMappingURL=message.js.map