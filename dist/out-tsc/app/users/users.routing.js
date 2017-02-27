import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AddUserComponent } from './add-user.component';
import { PreventUnsavedChanges } from './prevent-unsaved-guard.service';
export var UsersRouting = RouterModule.forChild([
    { path: 'users', component: UsersComponent },
    { path: 'users/adduser', component: AddUserComponent, canDeactivate: [PreventUnsavedChanges] },
    { path: 'users/:id', component: AddUserComponent }
]);
//# sourceMappingURL=../../../../src/app/users/users.routing.js.map