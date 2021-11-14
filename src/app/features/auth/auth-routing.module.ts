import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginShellComponent } from './container/login-shell/login-shell.component';
import { RegistrationShellComponent } from './container/registration-shell/registration-shell.component';

const routes: Routes = [
    { path: '', redirectTo: 'login' },
    { path: 'login', component: LoginShellComponent },
    { path: 'registration', component: RegistrationShellComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
