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
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { UsersMDB } from './users';
import { Validators, FormBuilder } from '@angular/forms';
import { EmailValidator } from "./emailVal";
var AddUserComponent = (function () {
    function AddUserComponent(_userService, _router, _route, fb) {
        this._userService = _userService;
        this._router = _router;
        this._route = _route;
        this.user = new UsersMDB();
        this.form = fb.group({
            email: [, Validators.compose([
                    Validators.required,
                    EmailValidator.emailValidate
                ])
            ],
            name: [, Validators.required],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zip: []
            })
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.titleUser = id ? "Edit User" : "New User";
            if (!id)
                return;
            _this._userService.getUser(id)
                .subscribe(function (user) {
                _this.user = user,
                    console.log(_this.user);
            }, function (response) {
                if (response.status == 404) {
                    console.log("error"),
                        _this._router.navigate(['NotFound']);
                }
            });
        });
    };
    AddUserComponent.prototype.addUser = function (modal) {
        var _this = this;
        var result;
        if (this.user.id) {
            result = this._userService.updateUser(this.user);
        }
        else {
            result = this._userService.addUser(modal);
        }
        result.subscribe(function (reset) {
            _this.form.markAsPristine();
            _this._router.navigate(['users']);
        });
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    Component({
        templateUrl: 'add-user.component.html'
    }),
    __metadata("design:paramtypes", [UsersService,
        Router,
        ActivatedRoute,
        FormBuilder])
], AddUserComponent);
export { AddUserComponent };
//# sourceMappingURL=../../../../src/app/users/add-user.component.js.map