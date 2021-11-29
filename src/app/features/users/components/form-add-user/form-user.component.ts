import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators, FormArray } from '@angular/forms';
import { combineLatest, Observable, Subject } from 'rxjs';
import { skip, startWith, take, takeUntil } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';
import { ValidatorsService } from 'src/app/shared-module/service/validators.service';

@Component({
    selector: 'app-form-user',
    templateUrl: './form-user.component.html',
    styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit, OnDestroy {
    @Input() user$?: Observable<User>;
    public disabledSpinner = true;
    public formCreateUser: FormGroup;
    private destroy$ = new Subject();

    constructor(private validatorsService: ValidatorsService) {}

    ngOnInit(): void {
        this.formCreateUser = new FormGroup({
            login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            age: new FormControl('', [Validators.min(15), Validators.max(100), Validators.required]),
            company: new FormControl('', Validators.maxLength(35)),
            department: new FormControl('', Validators.minLength(6)),
            photo: new FormControl(''),
            gender: new FormControl('Man', Validators.required),
            email: new FormControl(
                '',
                [Validators.required, Validators.email, () => this.emailNameValidator],
                [this.repeatEmailValidator.bind(this)],
            ),
            activated: new FormControl(true),
            addresses: new FormArray([]),
        });

        this.checkValueName();
    }

    addChildForm(formAddresses: FormGroup) {
        (this.formCreateUser.get('addresses') as FormArray).push(formAddresses);
    }

    saveUser() {
        return this.formCreateUser;
    }

    private checkValueName() {
        combineLatest([
            this.formCreateUser
                .get('firstName')
                .valueChanges.pipe(startWith(this.formCreateUser.get('firstName').value)),
            this.formCreateUser.get('lastName').valueChanges.pipe(startWith(this.formCreateUser.get('lastName').value)),
        ])
            .pipe(skip(2))
            .subscribe(([name, surname]) => {
                this.formCreateUser.get('email').setValue(`${name + surname + '@gmail.com'}`);
            });
    }

    private emailNameValidator(control: FormControl): { [s: string]: boolean } | null {
        return this.validatorsService.emailName(control.value);
    }

    private repeatEmailValidator(control: FormControl): Observable<ValidationErrors> {
        return this.validatorsService.emailRepeat(control.value);
    }

    private timeLoader() {
        this.user$
            .pipe(take(2), takeUntil(this.destroy$))
            .subscribe((user) => (!user ? (this.disabledSpinner = false) : (this.disabledSpinner = true)));
    }

    ngOnChanges() {
        this.timeLoader();
        this.user$.pipe(takeUntil(this.destroy$), skip(1)).subscribe((user) => this.formCreateUser.patchValue(user[0]));
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
