import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './main-content/list-users-page/users.component';
import { CreateNewUserComponent } from './main-content/create-user-page/create-new-user/create-new-user.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'second-page', component: CreateNewUserComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
