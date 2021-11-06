import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { map, mergeAll, mergeMap, take } from 'rxjs/operators';

import { User } from 'src/app/shared-module/interface/user.interface';

@Component({
    selector: 'app-form-edit-user',
    templateUrl: './form-edit-user.component.html',
    styleUrls: ['./form-edit-user.component.scss'],
})
export class FormEditUserComponent implements OnInit, OnChanges {
    @Input() user: User;
    @Output() saveUser = new EventEmitter();
    public editForm: FormGroup;
    private firstNameEmail;
    private lastNameEmail;

    constructor() {}

    ngOnInit(): void {
        this.initForm();
        this.checkValueName();
    }

    initForm() {
        this.editForm = new FormGroup({
            firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            age: new FormControl('', [Validators.min(15), Validators.max(100), Validators.required]),
            company: new FormControl('', Validators.maxLength(35)),
            department: new FormControl('', Validators.minLength(6)),
            photo: new FormControl(''),
            gender: new FormControl('Man', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            activated: new FormControl(true),
            addresses: new FormArray([]),
        });
    }

    checkValueName() {
        merge(this.editForm.get('firstName').valueChanges, this.editForm.get('lastName').valueChanges)
            .pipe(take(1))
            .subscribe(() => this.newEmail());

        //ASK??? ---->>>>

        // merge(
        //     this.editForm.get('firstName').valueChanges.pipe(
        //         map((value) => {
        //             return {
        //                 firstName: value,
        //             };
        //         }),
        //     ),
        //     this.editForm.get('lastName').valueChanges.pipe(
        //         map((value) => {
        //             return {
        //                 lastName: value,
        //             };
        //         }),
        //     ),
        // ).subscribe((data) => {
        //     console.log((data['firstName'] || '') + (data['lastName'] || '') + '@gmail.com');
        // });

        // this.editForm
        //     .get('firstName')
        //     .valueChanges.pipe(
        //         mergeMap((firstName) =>
        //             this.editForm.get('lastName').valueChanges.pipe(map((lastName) => firstName + lastName)),
        //         ),
        //     )
        //     .subscribe((data) => console.log(data));
    }
    newEmail(): void {
        const newEmail = `${this.editForm.get('firstName').value}${this.editForm.get('lastName').value}@gmail.com`;
        this.editForm.get('email').setValue(newEmail);
    }

    save() {
        this.saveUser.emit(this.editForm.value);
    }

    ngOnChanges() {
        if (this.user) {
            this.editForm.patchValue(this.user);
        }
    }
}
