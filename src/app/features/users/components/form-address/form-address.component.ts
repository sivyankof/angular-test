import {
    Component,
    EventEmitter,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-form-address',
    templateUrl: './form-address.component.html',
    styleUrls: ['./form-address.component.scss'],
})
export class FormAddressComponent implements OnInit, OnDestroy {
    @Output() childFormAddress = new EventEmitter<any>();

    private destroy$ = new Subject();

    public currentForm: FormGroup = new FormGroup({
        addresses: new FormArray([]),
    });

    constructor() {}

    ngOnInit(): void {
        this.addNewAddress();
        this.childFormAddress.emit(this.currentForm.get('addresses'));
        this.currentForm
            .get('addresses')
            .statusChanges.pipe(takeUntil(this.destroy$))
            .subscribe(() => this.hasValue());
    }

    addNewAddress(): any {
        (this.currentForm.get('addresses') as FormArray).push(
            new FormGroup({
                address: new FormControl('', Validators.required),
                city: new FormControl(''),
                zip: new FormControl(
                    { value: '', disabled: true },
                    Validators.required
                ),
            })
        );
    }

    get addressesControls(): AbstractControl[] {
        return (this.currentForm.get('addresses') as FormArray).controls;
    }

    hasValue() {
        const arrControls = (this.currentForm.get('addresses') as FormArray)
            .controls;

        arrControls.forEach((group) => {
            if (group.get('city').value.length >= 1) {
                group.get('zip').enable({ emitEvent: false });
            } else {
                group.get('zip').disable({ emitEvent: false });
                group.get('zip').setValue('', { emitEvent: false });
            }
        });
    }

    deleteAddressControl(i: number) {
        (this.currentForm.get('addresses') as FormArray).removeAt(i);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
