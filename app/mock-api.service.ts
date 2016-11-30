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
        ];

        return {
            accounts
        };
    }
}