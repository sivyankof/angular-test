import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { UsersComponent } from './users/users.component';
import { UserComponent } from '../shared-module/components/user/user.component';

@NgModule({
    declarations: [UsersComponent, UserComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule],
    exports: [UsersComponent],
})
export class FirstPageModule {}
