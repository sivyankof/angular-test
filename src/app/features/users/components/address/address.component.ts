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
        this.parentFormGroup.addControl('addresses', new FormArray([this.initAddress()]));
    }

    private initAddress(): any {
        return new FormGroup({
            address: new FormControl('', Validators.required),
            city: new FormControl(''),
            zip: new FormControl({ value: '', disabled: true }),
        });
    }

    addNewAddress() {
        (this.parentFormGroup.get('addresses') as FormArray).push(this.initAddress());
    }

    get addressesControls(): any {
        return (this.parentFormGroup.get('addresses') as FormArray).controls;
    }

    hasValue(formAddress: FormGroup) {
        if (formAddress.get('city').value) {
            formAddress.get('zip').enable();
            formAddress.get('zip').addValidators(Validators.required);
        } else {
            formAddress.get('zip').disable();
            formAddress.get('zip').setValue('');
            formAddress.get('zip').removeValidators(Validators.required);
        }
    }
    deleteAddressControl(index: number) {
        (this.parentFormGroup.get('addresses') as FormArray).controls.splice(index, 1);
    }
}
