import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { Observable } from 'rxjs/Observable';
import {UsersMDB} from './users';


import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

import { EmailValidator } from "./emailVal";


@Component({
    // Import Form HTML
    templateUrl: 'add-user.component.html'
})

export class AddUserComponent implements OnInit {
    id;
    titleUser: string;
    user = new UsersMDB();
    form: FormGroup;

    //Make private so wont effect other routs
    // Create instance of FormBuilder
    constructor(
        private _userService: UsersService,
        private _router: Router,
        private _route: ActivatedRoute,
        fb: FormBuilder) {
        //Model Driven Form
        this.form = fb.group({
            //Validators for each input
            // Use compose for custom Validators

            email: [, Validators.compose([
                Validators.required,
                EmailValidator.emailValidate])
            ],
            name: [, Validators.required],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zip: []
            })
        })
    }

    ngOnInit() {
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

            this.titleUser = id ? "Edit User" : "New User";

            if (!id)
                return;

            this._userService.getUser(id)
                .subscribe(
                user => {
                    this.user = user,
                        console.log(this.user)
                },
                response => {
                    if (response.status == 404) {
                        console.log("error"),
                            this._router.navigate(['NotFound']);
                    }
                });
        });
    }

    // When Submit button is click log form details in Jsoon
    addUser(modal: UsersMDB) {

        let result;

        if (this.user.id) {
            result = this._userService.updateUser(this.user);

        }
        else {
            result = this._userService.addUser(modal);
        }
        result.subscribe(reset => {
            this.form.markAsPristine();
            this._router.navigate(['users']);
        });
    }
}
