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
const http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
let AccountsService = class AccountsService {
    constructor(http) {
        this.http = http;
        this._apiUrl = 'localhost:8080/accounts';
    }
    list() {
        return this.http.get(this._apiUrl)
            .toPromise()
            .then(x => x.json().data);
    }
    get(username) {
        var pluck = x => (x && x.length) ? x[0] : undefined;
        return this.http
            .get(`${this._apiUrl}/?username=${username}`)
            .toPromise()
            .then(x => pluck(x.json().data))
            .catch(x => alert(x.json().error));
    }
    checkName(username) {
        var pluck = x => (x && x.length) ? x[0] : undefined;
        return this.http
            .get(`${this._apiUrl}/?id=${username}`)
            .toPromise()
            .then(x => pluck(x.json().data))
            .catch(x => alert(x.json().error));
    }
    add(account) {
        console.log(account);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        //var options = new RequestOptions({ headers: headers });
        return this.http
            .post(`${this._apiUrl}/register`, JSON.stringify(account), { headers: headers })
            .toPromise()
            .then(x => x)
            .catch(x => alert(x.json().error));
    }
    update(account) {
        return this.http
            .post(`${this._apiUrl}/${account.username}`, account)
            .toPromise()
            .then(() => account)
            .catch(x => alert(x.json().error));
    }
    delete(account) {
        return this.http
            .delete(`${this._apiUrl}/${account.username}`, account)
            .toPromise()
            .catch(x => alert(x.json().error));
    }
    login(credentials) {
        var pluck = x => (x && x.length) ? x[0] : undefined;
        return this.http
            .post(`${this._apiUrl}/login`, credentials)
            .toPromise()
            .then(x => pluck(x.json().data))
            .catch(x => alert(x.json().error));
    }
};
AccountsService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], AccountsService);
exports.AccountsService = AccountsService;
//# sourceMappingURL=accounts.service.js.map