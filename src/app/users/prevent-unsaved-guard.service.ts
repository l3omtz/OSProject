import { CanDeactivate } from '@angular/router';
import {AddUserComponent } from './add-user.component'

export class PreventUnsavedChanges implements CanDeactivate<AddUserComponent>{

    canDeactivate(component: AddUserComponent) {
        if (component.form.dirty)
            return confirm('Are you sure?')

        return true; // should be TRUE FOR PROMPT TO WORK
    }

}
