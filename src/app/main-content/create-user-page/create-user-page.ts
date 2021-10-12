import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { CreateNewUserComponent } from './create-new-user/create-new-user.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [CreateNewUserComponent],
    imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatRadioModule, MatButtonModule],
    exports: [],
})
export class CreateUserPageModule {}
