import { AbstractControl, ValidationErrors } from "@angular/forms";

export function createEmailValidator() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        if (emailPattern.test(value)) {
            return null;
        }
        return {
            email: 'Invalid email'
        };
    };
}