import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { InputTextComponent } from './input/input.component';

@NgModule({
    declarations: [InputTextComponent],
    imports: [CommonModule, MatInputModule, FormsModule],
    exports: [InputTextComponent],
})
export class SecondPageModule {}
