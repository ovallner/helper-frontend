import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable()
export class MockApiService implements InMemoryDbService {
    createDb() {
        let accounts = [
            {
                first_name: "Jacquie",
                last_name: "Elias",
                username: "jacquie",
                email: "jelias@smu.edu",
                password: "yas",
                isCounselor: false
            },
            {
                first_name: "Oscar",
                last_name: "Vallner",
                username: "ovallner",
                email: "ovallner@gmail.com",
                password: "password",
                isCounselor: true
            },
            {
                first_name: "Donald",
                last_name: "Trump",
                username: "dtrump",
                email: "badhombre@gmail.com",
                password: "password",
                isCounselor: false
            },
            {
                first_name: "Traian",
                last_name: "Pop",
                username: "Tpop",
                email: "tpop@gmail.com",
                password: "hunter3",
                isCounselor: true
            }
        ];

        return {
            accounts
        };
    }
}