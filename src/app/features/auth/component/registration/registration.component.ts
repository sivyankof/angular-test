import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    public newUserForm: FormGroup;
    constructor() {}

    ngOnInit(): void {
        this.newUserForm = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            passGroup: new FormGroup(
                {
                    password: new FormControl(null, [Validators.required]),
                    confirmPassword: new FormControl(null, [Validators.required]),
                },
                this.confirmPass,
            ),
        });
    }

    private confirmPass(control: FormGroup): { [s: string]: boolean } | null {
        const valid = control.value.password === control.value.confirmPassword;
        return valid ? null : { pass: true };
    }

    reg() {
        this.newUserForm.markAllAsTouched();
    }
}
