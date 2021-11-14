import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginShellComponent } from './container/login-shell/login-shell.component';
import { LoginComponent } from './component/login/login.component';
import { MaterialModule } from 'src/app/shared-module/material/material.module';
import { RegistrationComponent } from './component/registration/registration.component';
import { RegistrationShellComponent } from './container/registration-shell/registration-shell.component';

@NgModule({
    declarations: [LoginShellComponent, LoginComponent, RegistrationComponent, RegistrationShellComponent],
    imports: [CommonModule, AuthRoutingModule, MaterialModule, ReactiveFormsModule],
})
export class AuthModule {}
