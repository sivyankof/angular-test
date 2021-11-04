import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-edit-user',
    templateUrl: './form-edit-user.component.html',
    styleUrls: ['./form-edit-user.component.scss'],
})
export class FormEditUserComponent implements OnInit {
    public editForm: FormGroup;
    constructor() {}

    ngOnInit(): void {
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
}
