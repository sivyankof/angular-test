import { Component, Input, DoCheck } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-error-validator',
    templateUrl: './error-validator.component.html',
    styleUrls: ['./error-validator.component.scss'],
})
export class ErrorValidatorComponent implements DoCheck {
    @Input() control: FormControl;

    public errorMessage: string;

    private message: object = {
        required: () => 'Required field',
        minlength: () =>
            `Min length ${this.control.errors.minlength.requiredLength} symbols`,
        maxlength: () =>
            `Max length ${this.control.errors.maxlength.requiredLength} symbols`,
        min: () => `Min ${this.control.errors.min.min} age`,
        max: () => `Max ${this.control.errors.max.max} age`,
        email: () => 'In email need "@"',
        mailName: () => 'Mail must include "@gmail" and "."',
        doubleEmail: () => 'Such Mail already exists',
        confirmPass: () => 'Your confirm password mistake',
    };

    ngDoCheck() {
        const typeErr = this.control.errors;
        for (const err in typeErr) {
            this.errorMessage = this.message[err]();
        }
    }
}
