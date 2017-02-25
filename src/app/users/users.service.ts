import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/interval';
import {IntervalObservable} from 'rxjs/observable/IntervalObservable'

import {UsersMDB} from './users';

@Injectable()

export class UsersService {

    private _UserUrl = "http://jsonplaceholder.typicode.com/users"; // BOO
    private _localUserDB = "http://localhost:3000/user";

    constructor(private _http: Http) { }

    // To get individual user data
    private getUserUrl(userId) {
        return this._localUserDB + "/" + userId;
    }

    /* ---
      HTTP REQUESTS
    ---  */
    // Local Side DB --- YAY
    getLocalUsers() {
        return this._http.get(this._localUserDB)
            .map((res: Response) => res.json())
            .catch(this.errorHandler);
    }
    getUser(userId) {
        return this._http.get(this.getUserUrl(userId))
            .map(res => res.json());
    }
    addUser(user) {
        // var userModel = new UsersMDB();   // <-- Same result >:/
        let body = JSON.stringify(user);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json ; charset=uft-8');
        return this._http.post(this._localUserDB, body, headers)
            .map((res: Response) => { res.json(), console.log(res.json()); });
	   }

    deleteUser(userId) {
        return this._http.delete(this.getUserUrl(userId))
            .map(res => res.json());

    }

    updateUser(user) {
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(res => res.json());
    }



    // Server Side DB --- Not in use
    getUsers() {
        return this._http.get(this._UserUrl)
            .map(res => res.json())
            .catch(this.errorHandler);
    }


    // TESTING INTERBET CONNECTION --- NOT WORKING :/
    errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(confirm("No Server Connection"));
    }
}
