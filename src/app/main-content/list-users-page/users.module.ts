import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserComponent } from 'src/app/shared-module/components/user/user.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [UsersComponent, UserComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class UsersPageModule {}
