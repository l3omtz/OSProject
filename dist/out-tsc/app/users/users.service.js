var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/observable/interval';
var UsersService = (function () {
    function UsersService(_http) {
        this._http = _http;
        this._UserUrl = "http://jsonplaceholder.typicode.com/users";
        this._localUserDB = "http://localhost:3000/user";
    }
    UsersService.prototype.getUserUrl = function (userId) {
        return this._localUserDB + "/" + userId;
    };
    UsersService.prototype.getLocalUsers = function () {
        return this._http.get(this._localUserDB)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    UsersService.prototype.getUser = function (userId) {
        return this._http.get(this.getUserUrl(userId))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.addUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json ; charset=uft-8');
        return this._http.post(this._localUserDB, body, headers)
            .map(function (res) { res.json(), console.log(res.json()); });
    };
    UsersService.prototype.deleteUser = function (userId) {
        return this._http.delete(this.getUserUrl(userId))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.updateUser = function (user) {
        return this._http.put(this.getUserUrl(user.id), JSON.stringify(user))
            .map(function (res) { return res.json(); });
    };
    UsersService.prototype.getUsers = function () {
        return this._http.get(this._UserUrl)
            .map(function (res) { return res.json(); })
            .catch(this.errorHandler);
    };
    UsersService.prototype.errorHandler = function (error) {
        console.error(error);
        return Observable.throw(confirm("No Server Connection"));
    };
    return UsersService;
}());
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UsersService);
export { UsersService };
//# sourceMappingURL=../../../../src/app/users/users.service.js.map