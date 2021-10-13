import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ValidatorsService } from 'src/app/shared-module/service/validators.service';

@Component({
    selector: 'app-form-add-user',
    templateUrl: './form-add-user.component.html',
    styleUrls: ['./form-add-user.component.scss'],
})
export class FormAddUserComponent implements OnInit {
    constructor(private validatorsService: ValidatorsService) {}

    ngOnInit(): void {}
    formCreateUser: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        age: new FormControl('', [Validators.min(15), Validators.max(100), Validators.required]),
        company: new FormControl('', Validators.maxLength(35)),
        department: new FormControl('', Validators.minLength(6)),
        photo: new FormControl(''),
        gender: new FormControl('Man', Validators.required),
        email: new FormControl(
            '',
            [Validators.required, Validators.email, this.emailNameValidator.bind(this)],
            [this.repeatEmailValidator.bind(this)],
        ),
        activated: new FormControl(true),
    });

    public saveUser() {
        return this.formCreateUser;
    }

    private emailNameValidator(control: FormControl): { [s: string]: boolean } | null {
        return this.validatorsService.emailName(control.value);
    }

    private repeatEmailValidator(control: FormControl): Observable<ValidationErrors> {
        return this.validatorsService.emailRepeat(control.value);
    }
}
