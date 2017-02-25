import { FormControl } from '@angular/forms';

export class EmailValidator {

    static emailValidate(control: FormControl) {

        function check(email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        };

        if (!check(control.value)) {
            return { emailValidate: false };
        }
        // console.log("this is my email")
        // } else {
        //     return { emailValidate: false };
        // }
    }

}
