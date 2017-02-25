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
    // user: any;
    form: FormGroup;

    //Make private so wont effect other routs
    // Create instance of FormBuilder
    constructor(private _userService: UsersService, private _router: Router, private _route: ActivatedRoute, fb: FormBuilder) {
        //Model Driven Form
        this.form = fb.group({
            //Validators for each input
            // Use compose for custom Validators
            email: ['', Validators.compose([
                Validators.required,
                EmailValidator.emailValidate])
            ],
            name: ['', Validators.required],
            phone: [],
            street: [],
            suite: [],
            city: [],
            zip: ['', Validators.required]
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
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });
    }


    // When Submit button is click log form details in Jsoon
    addUser(modal: UsersMDB) {
        // console.log(this.form.value);

        let result;
        this.user.name = this.form.value.name;

        if (this.user.id) {
            result = this._userService.updateUser(this.user);
        }
        else {
            result = this._userService.addUser(modal);
        }
        result.subscribe(addedUser => {
            this.user = addedUser;
            // this.form.markAsPristine();

            console.log(this.form.value.name);
            console.log(this.user);
            console.log(modal);

            // this._router.navigate(['users']);
        });
    }
}
