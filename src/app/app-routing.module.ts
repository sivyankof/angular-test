import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './features/users/containers/list-users-shell/list-users-shell.component';
import { CreateNewUserShellComponent } from './features/users/containers/create-new-user-shell/create-new-user-shell.component';
import { EditUserShellComponent } from './features/users/containers/edit-user-shell/edit-user-shell.component';
import { ExitEditGuard } from './features/users/containers/exit-edit.guard';

const routes: Routes = [
    { path: '', component: ListUsersComponent },
    { path: 'create-user', component: CreateNewUserShellComponent },
    { path: 'edit-user/:id', component: EditUserShellComponent, canDeactivate: [ExitEditGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
