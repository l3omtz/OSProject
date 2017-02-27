var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
var UsersComponent = (function () {
    function UsersComponent(_userService, _router) {
        var _this = this;
        this._userService = _userService;
        this._router = _router;
        this.btnClick = function () {
            this._router.navigate(['users/adduser']);
        };
        this._userService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    }
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getLocalUsers()
            .subscribe(function (localUser) { _this.newUsers = localUser, console.log(_this.newUsers); }, function (response) {
            if (response.status == 404) {
                _this._router.navigate(['NotFound']);
            }
        });
    };
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.editUser = function (user) {
        this._router.navigate(['/users', user.id]);
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.newUsers.indexOf(user);
            this.newUsers.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe(function (res) { return _this.getUsers(); }, function (err) {
                alert("Could not delete the user.");
                _this.newUsers.splice(index, 0, user);
            });
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Component({
        templateUrl: './users.component.html'
    }),
    __metadata("design:paramtypes", [UsersService, Router])
], UsersComponent);
export { UsersComponent };
//# sourceMappingURL=../../../../src/app/users/users.component.js.map