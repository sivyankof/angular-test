import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatIconModule } from '@angular/material/icon';

import { CreateNewUserShellComponent } from './containers/create-new-user-shell/create-new-user-shell.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { ErrorValidatorComponent } from './components/error-validator/error-validator.component';
import { ListUsersComponent } from './containers/list-users-shell/list-users-shell.component';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
    declarations: [
        CreateNewUserShellComponent,
        FormAddUserComponent,
        ErrorValidatorComponent,
        ListUsersComponent,
        UserComponent,
        AddressComponent,
    ],
    imports: [
        CommonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        TextFieldModule,
        MatIconModule,
    ],
    exports: [],
})
export class UsersModule {}
