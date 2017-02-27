// GET THE ROUTER MODULES SO WE CAN USE THEM
import {Router, RouterModule} from '@angular/router';

// IMPORT COMPONENTS WE WANT TO ROUTE TO
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user.component';

import { PreventUnsavedChanges } from './prevent-unsaved-guard.service';

// EXPORT THEM WITH PATH TO USE OUTSIDE UUNIVERSAL
export const UsersRouting = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
    { path: 'users/adduser', component: AddUserComponent, canDeactivate: [PreventUnsavedChanges] },
    { path: 'users/:id', component: AddUserComponent }
]);
