export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'invalidEmailAddress': 'Invalid email address',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidPhoneNumber': 'Invalid phone number'
        };

        return config[validatorName];
    }

    static emailValidator(control: any) {
        // RFC 2822 compliant regex
        if (control !== undefined && control !== null && control.value !== undefined && control.value !== null) {
            if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
                return null;
            } else {
                return { 'invalidEmailAddress': true };
            }
        }
    }

    static phoneNumberValidator(control: any) {
        if (control !== undefined && control !== null && control.value !== undefined && control.value !== null) {
            var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
            if (control.value.match(phoneno)) {
                return null;
            } else {
                return { 'invalidPhoneNumber': true };
            }
        }
    }
}
