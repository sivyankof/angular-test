import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './features/users/containers/list-users-shell/list-users-shell.component';
import { CreateNewUserShellComponent } from './features/users/containers/create-new-user-shell/create-new-user-shell.component';
import { EditUserShellComponent } from './features/users/containers/edit-user-shell/edit-user-shell.component';

const routes: Routes = [
    { path: '', component: ListUsersComponent },
    { path: 'create-user', component: CreateNewUserShellComponent },
    { path: 'edit-user/:id', component: EditUserShellComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
