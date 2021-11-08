import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared-module/components/shared.module';
import { MaterialModule } from 'src/app/shared-module/material/material.module';

import { CreateNewUserShellComponent } from './containers/create-new-user-shell/create-new-user-shell.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { ErrorValidatorComponent } from './components/error-validator/error-validator.component';
import { ListUsersComponent } from './containers/list-users-shell/list-users-shell.component';
import { FormAddressComponent } from './components/form-address/form-address.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { SearchUserShellComponent } from './containers/search-user-shell/search-user-shell.component';
import { ExitEditGuard } from './containers/exit-edit.guard';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
    declarations: [
        CreateNewUserShellComponent,
        FormAddUserComponent,
        ErrorValidatorComponent,
        ListUsersComponent,
        FormAddressComponent,
        EditUserShellComponent,
        SearchUserShellComponent,
        DialogComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, MaterialModule, SharedModule],
    exports: [],
    providers: [ExitEditGuard],
})
export class UsersModule {}
