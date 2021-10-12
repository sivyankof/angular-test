import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { UsersService } from 'src/app/shared-module/service/users.service';
import { ValidatorsService } from 'src/app/shared-module/service/validators.service';

@Component({
    selector: 'app-create-new-user',
    templateUrl: './create-new-user.component.html',
    styleUrls: ['./create-new-user.component.scss'],
})
export class CreateNewUserComponent implements OnInit {
    private sub: Subscriber<any> = new Subscriber();

    constructor(
        private usersService: UsersService,
        private router: Router,
        private validatorsService: ValidatorsService,
    ) {}

    formCreateUser: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
        age: new FormControl('', [
            Validators.min(15),
            Validators.max(100),
            Validators.required,
            Validators.pattern(/^[0-9]+(?!.)/),
        ]),
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
    ngOnInit(): void {
        console.log(this.formCreateUser.controls);
    }

    saveNewUser() {
        console.log('IS_VALID', this.formCreateUser.valid);

        if (this.formCreateUser.valid) {
            this.sub.add(
                this.usersService.addNewUser(this.formCreateUser.value).subscribe(
                    () => this.router.navigate(['']),
                    (err) => console.log('My error', err),
                ),
            );
        }
    }

    isInvalid(value: string) {
        console.log(this.formCreateUser.get(value).invalid);
        return this.formCreateUser.get(value).invalid;
    }

    emailNameValidator(control: FormControl): { [s: string]: boolean } | null {
        return this.validatorsService.emailName(control.value);
    }

    repeatEmailValidator(control: FormControl): Observable<ValidationErrors> {
        return this.validatorsService.emailRepeat(control.value);
    }
}
