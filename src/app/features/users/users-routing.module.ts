import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExitEditGuard } from 'src/app/shared-module/guards/exit-edit.guard';
import { CanActivateGuard } from '../../shared-module/guards/auth.guard';
import { CreateNewUserShellComponent } from './containers/create-new-user-shell/create-new-user-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { ListUsersComponent } from './containers/list-users-shell/list-users-shell.component';

const routes: Routes = [
    { path: '', redirectTo: 'list-users', pathMatch: 'full' },
    { path: 'list-users', component: ListUsersComponent, canActivate: [CanActivateGuard] },
    { path: 'create-user', component: CreateNewUserShellComponent, canActivate: [CanActivateGuard] },
    {
        path: 'edit-user/:id',
        component: EditUserShellComponent,
        canActivate: [CanActivateGuard],
        canDeactivate: [ExitEditGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
