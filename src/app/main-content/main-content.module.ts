import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersPageModule } from './list-users-page/users.module';
import { CreateUserPageModule } from './create-user-page/create-user-page.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, UsersPageModule, CreateUserPageModule],
})
export class MainContentModule {}
