import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [UsersComponent, UserComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule],
    exports: [UsersComponent],
})
export class FirstPageModule {}
