import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateNewUserShellComponent } from './create-new-user-shell/create-new-user-shell.component';
import { FormAddUserComponent } from './form-add-user/form-add-user.component';
import { ErrorValidatorComponent } from './error-validator/error-validator.component';

@NgModule({
    declarations: [CreateNewUserShellComponent, FormAddUserComponent, ErrorValidatorComponent],
    imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatRadioModule, MatButtonModule],
    exports: [],
})
export class CreateUserPageModule {}
