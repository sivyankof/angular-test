import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './main-content/list-users-page/users.component';
import { CreateNewUserShellComponent } from './main-content/create-user-page/create-new-user-shell/create-new-user-shell.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'second-page', component: CreateNewUserShellComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
