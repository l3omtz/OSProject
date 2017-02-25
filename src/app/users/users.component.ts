import { Component, OnInit } from '@angular/core';

import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {UsersMDB} from './users';

@Component({
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
    //NOT IS USE
    users; // <-- NOt IN USE!

    newUsers;
    // usersMDB = new UsersMDB(); <-- Testing not in use A.T.M

    constructor(private _userService: UsersService, private _router: Router) {
        // Not good structure to but in constructor
        this._userService.getUsers()
            .subscribe(res => this.users = res);
    }

    btnClick = function() {
        this._router.navigate(['users/adduser']);
    };

    getUsers() {
        this._userService.getLocalUsers()
            .subscribe(
            localUser => this.newUsers = localUser,
            // localUser => console.log(localUser),
            response => {
                if (response.status == 404) {
                    this._router.navigate(['NotFound']);
                }
            });
    }

    ngOnInit() {
        // Would want services that calls an API in OnInit Method
        this.getUsers();
    }

    deleteUser(user) {
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.newUsers.indexOf(user)
            // Here, with the splice method, we remove 1 object
            // at the given index.
            this.newUsers.splice(index, 1);
            this._userService.deleteUser(user.id)
                .subscribe( // It has null, --- didn't work :/ -- First Params shouln't be error
                res => this.getUsers(),
                err => {
                    alert("Could not delete the user.");
                    // Revert the view back to its original state
                    // by putting the user object at the index
                    // it used to be.
                    this.newUsers.splice(index, 0, user);
                }
                );


        }
    }
}
