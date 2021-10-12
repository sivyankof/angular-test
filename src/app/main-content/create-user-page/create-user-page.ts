import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateNewUserComponent } from './create-new-user/create-new-user.component';

@NgModule({
    declarations: [CreateNewUserComponent],
    imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatRadioModule, MatButtonModule],
    exports: [],
})
export class CreateUserPageModule {}
