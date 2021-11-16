import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { MaterialModule } from '../material/material.module';
import { ErrorValidatorComponent } from './error-validator/error-validator.component';

@NgModule({
    declarations: [UserComponent, ErrorValidatorComponent],
    imports: [CommonModule, MaterialModule],
    exports: [UserComponent, ErrorValidatorComponent],
})
export class SharedModule {}
