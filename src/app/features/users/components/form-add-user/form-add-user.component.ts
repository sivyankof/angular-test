import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators, FormArray } from '@angular/forms';
import { merge, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/shared-module/interface/user.interface';

import { ValidatorsService } from 'src/app/shared-module/service/validators.service';

@Component({
    selector: 'app-form-add-user',
    templateUrl: './form-add-user.component.html',
    styleUrls: ['./form-add-user.component.scss'],
})
export class FormAddUserComponent implements OnInit {
    @Input() user?: User;
    public disabledSpinner = false;
    public formCreateUser: FormGroup;
    private firstNameEmail;
    private lastNameEmail;

    constructor(private validatorsService: ValidatorsService) {}

    ngOnInit(): void {
        this.formCreateUser = new FormGroup({
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
            addresses: new FormArray([]),
        });

        this.timeLoader();
        this.checkValueName();
    }

    addChildForm(formAddresses: FormGroup) {
        (this.formCreateUser.get('addresses') as FormArray).push(formAddresses);
    }

    saveUser() {
        return this.formCreateUser;
    }

    private checkValueName() {
        merge(
            this.formCreateUser.get('firstName').valueChanges,
            this.formCreateUser.get('lastName').valueChanges,
        ).subscribe(() => this.newEmail());

        //ASK??? ---->>>>

        // merge(
        //     this.formCreateUser.get('firstName').valueChanges.pipe(
        //         map((value) => {
        //             return {
        //                 firstName: value,
        //             };
        //         }),
        //     ),
        //     this.formCreateUser.get('lastName').valueChanges.pipe(
        //         map((value) => {
        //             return {
        //                 lastName: value,
        //             };
        //         }),
        //     ),
        // ).subscribe((data) => {
        //     console.log((data['firstName'] || '') + (data['lastName'] || '') + '@gmail.com');
        // });

        // this.formCreateUser
        //     .get('firstName')
        //     .valueChanges.pipe(
        //         mergeMap((firstName) =>
        //             this.formCreateUser.get('lastName').valueChanges.pipe(map((lastName) => firstName + lastName)),
        //         ),
        //     )
        //     .subscribe((data) => console.log(data));
    }

    private newEmail(): void {
        const newEmail = `${this.formCreateUser.get('firstName').value}${
            this.formCreateUser.get('lastName').value
        }@gmail.com`;
        this.formCreateUser.get('email').setValue(newEmail);
    }

    private emailNameValidator(control: FormControl): { [s: string]: boolean } | null {
        return this.validatorsService.emailName(control.value);
    }

    private repeatEmailValidator(control: FormControl): Observable<ValidationErrors> {
        return this.validatorsService.emailRepeat(control.value);
    }

    private timeLoader() {
        setTimeout(() => {
            if (!this.user) this.disabledSpinner = true;
        }, 3000);
    }

    ngOnChanges() {
        if (this.user) this.formCreateUser.patchValue(this.user);
    }
}
