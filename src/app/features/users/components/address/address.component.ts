import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
    @Input() parentFormGroup: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.parentFormGroup.addControl('address', new FormArray([this.initAddress()]));
    }

    private initAddress(): FormGroup {
        return new FormGroup({
            address: new FormControl('', Validators.required),
            city: new FormControl(''),
            zip: new FormControl(''),
        });
    }

    addNewAddress() {
        (this.parentFormGroup.get('address') as FormArray).push(this.initAddress());
    }

    get addressesControls(): any {
        return (this.parentFormGroup.get('address') as FormArray).controls;
    }
}
