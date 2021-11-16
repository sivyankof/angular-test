import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [UserComponent],
    imports: [CommonModule, MaterialModule],
    exports: [UserComponent],
})
export class SharedModule {}
