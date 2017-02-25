import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { AddUserComponent } from './add-user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PreventUnsavedChanges } from './prevent-unsaved-guard.service';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        UsersComponent,
        AddUserComponent
    ],
    declarations: [
        UsersComponent,
        AddUserComponent
    ],
    providers: [
        UsersService,
        PreventUnsavedChanges
    ]
})
export class UsersModule { }
