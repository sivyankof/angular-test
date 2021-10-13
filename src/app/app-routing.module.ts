import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './features/users/containers/list-users-shell/list-users-shell.component';
import { CreateNewUserShellComponent } from './features/users/containers/create-new-user-shell/create-new-user-shell.component';

const routes: Routes = [
    { path: '', component: ListUsersComponent },
    { path: 'create-user', component: CreateNewUserShellComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
