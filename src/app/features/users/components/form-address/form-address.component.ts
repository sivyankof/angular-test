import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-address',
    templateUrl: './form-address.component.html',
    styleUrls: ['./form-address.component.scss'],
})
export class FormAddressComponent implements OnInit {
    @Output() childFormAddress = new EventEmitter<any>();

    public currentForm: FormGroup = new FormGroup({ addresses: new FormArray([]) });

    constructor() {}

    ngOnInit(): void {
        this.addNewAddress();
        this.childFormAddress.emit(this.currentForm.get('addresses'));
    }

    public addNewAddress(): any {
        (this.currentForm.get('addresses') as FormArray).push(
            new FormGroup({
                address: new FormControl('', Validators.required),
                city: new FormControl(''),
                zip: new FormControl({ value: '', disabled: true }, Validators.required),
            }),
        );
    }

    get addressesControls(): any {
        return (this.currentForm.get('addresses') as FormArray).controls;
    }

    hasValue(formAddress: FormGroup) {
        if (formAddress.get('city').value) {
            formAddress.get('zip').enable();
        } else {
            formAddress.get('zip').disable();
            formAddress.get('zip').setValue('');
        }
    }
    deleteAddressControl(i) {
        (this.currentForm.get('addresses') as FormArray).removeAt(i);
    }
}
