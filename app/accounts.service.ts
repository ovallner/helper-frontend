import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AccountsService {
	private _apiUrl  = 'localhost:8080/accounts';

	constructor(private http: Http){}

	list() : Promise<any[]> {
		return this.http.get(this._apiUrl)
			.toPromise()
			.then(x => x.json().data as any[]);
	}

	get(username : string) : Promise<any> {
		var pluck = x => (x && x.length) ? x[0] : undefined;
		return this.http
			.get(`${this._apiUrl}/?username=${username}`)
			.toPromise()
			.then(x => pluck(x.json().data))
			.catch(x => alert(x.json().error));
	}

	checkName(username : string) : Promise<boolean> {
		var pluck = x => (x && x.length) ? x[0] : undefined;
		return this.http
			.get(`${this._apiUrl}/?id=${username}`)
			.toPromise()
			.then(x => pluck(x.json().data))
			.catch(x => alert(x.json().error));

	}

	add(account) : Promise<User> {
		console.log(account);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		//var options = new RequestOptions({ headers: headers });

		return this.http 
			.post(`${this._apiUrl}/register`, JSON.stringify(account), {headers: headers})
			.toPromise()
			.then(x => x)
			.catch(x => alert(x.json().error));
	}

	update(account) : Promise<User> {
		return this.http
			.post(`${this._apiUrl}/${account.username}`, account)
			.toPromise()
			.then(() => account)
			.catch(x => alert(x.json().error));
	}

	delete(account) : Promise<void> {
		return this.http
			.delete(`${this._apiUrl}/${account.username}`, account)
			.toPromise()
			.catch(x => alert(x.json().error));
	}

	login(credentials) : Promise<User> {
		var pluck = x => (x && x.length) ? x[0] : undefined;
		return this.http
			.post(`${this._apiUrl}/login`, credentials)
			.toPromise()
			.then(x => pluck(x.json().data))
			.catch(x => alert(x.json().error));
	}
}
