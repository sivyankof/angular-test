import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './main-content/first-page/users/users.component';
import { CreateNewUserComponent } from './main-content/second-page/create-new-user/create-new-user.component';
import { ThreePageComponent } from './main-content/three-page/three-page.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'second-page', component: CreateNewUserComponent },
    { path: 'three-page', component: ThreePageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
