var PreventUnsavedChanges = (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.form.dirty)
            return confirm('Are you sure?');
        return true;
    };
    return PreventUnsavedChanges;
}());
export { PreventUnsavedChanges };
//# sourceMappingURL=../../../../src/app/users/prevent-unsaved-guard.service.js.map