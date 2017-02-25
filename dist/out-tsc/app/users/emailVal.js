var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.emailValidate = function (control) {
        function check(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        ;
        if (!check(control.value)) {
            return { emailValidate: false };
        }
    };
    return EmailValidator;
}());
export { EmailValidator };
//# sourceMappingURL=../../../../src/app/users/emailVal.js.map