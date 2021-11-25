import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared-module/components/shared.module';
import { MaterialModule } from 'src/app/shared-module/material/material.module';

import { CreateNewUserShellComponent } from './containers/create-new-user-shell/create-new-user-shell.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { ListUsersComponent } from './containers/list-users-shell/list-users-shell.component';
import { FormAddressComponent } from './components/form-address/form-address.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { SearchUserShellComponent } from './containers/search-user-shell/search-user-shell.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { UsersRoutingModule } from './users-routing.module';
import { ExitEditGuard } from 'src/app/shared-module/guards/exit-edit.guard';
import { CanLoadGuard } from 'src/app/shared-module/guards/can-load.guard';
import { UsersDetailsShellComponent } from './containers/users-details-shell/users-details-shell.component';
import { FullNamePipe } from 'src/app/shared-module/pipe/full-name.pipe';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';
import { TableClientShellComponent } from './containers/table-client-shell/table-client-shell.component';
import { TableServerShellComponent } from './containers/table-server-shell/table-server-shell.component';

import { StoreModule } from '@ngrx/store';
import { UserReducer } from './store/reducers/user.reducers';

@NgModule({
    declarations: [
        CreateNewUserShellComponent,
        FormAddUserComponent,
        ListUsersComponent,
        FormAddressComponent,
        EditUserShellComponent,
        SearchUserShellComponent,
        DialogComponent,
        UsersDetailsShellComponent,
        FullNamePipe,
        PersonalInfoComponent,
        CompanyInfoComponent,
        OtherInfoComponent,
        TableClientShellComponent,
        TableServerShellComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule,
        UsersRoutingModule,
        StoreModule.forRoot({ state: UserReducer }),
    ],
    exports: [],
    providers: [ExitEditGuard, CanLoadGuard],
})
export class UsersModule {}
