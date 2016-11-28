import { User } from '../user';

export class Message {
    timestamp: string;
    body: string;
    user: any;

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