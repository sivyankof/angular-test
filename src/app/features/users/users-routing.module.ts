import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExitEditGuard } from 'src/app/shared-module/guards/exit-edit.guard';
import { UsersDetailsShellComponent } from './containers/users-details-shell/users-details-shell.component';

import { CreateNewUserShellComponent } from './containers/create-new-user-shell/create-new-user-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { ListUsersComponent } from './containers/list-users-shell/list-users-shell.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { OtherInfoComponent } from './components/other-info/other-info.component';

const routes: Routes = [
    { path: '', redirectTo: 'list-users', pathMatch: 'full' },
    { path: 'list-users', component: ListUsersComponent },
    { path: 'create-user', component: CreateNewUserShellComponent },
    {
        path: 'edit-user/:id',
        component: EditUserShellComponent,
        canDeactivate: [ExitEditGuard],
    },
    {
        path: 'details/:id',
        component: UsersDetailsShellComponent,
        children: [
            { path: '', redirectTo: 'personal-info', pathMatch: 'full' },
            { path: 'personal-info', component: PersonalInfoComponent },
            { path: 'company-info', component: CompanyInfoComponent },
            { path: 'other-info', component: OtherInfoComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
