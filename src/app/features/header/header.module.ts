import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from 'src/app/shared-module/material/material.module';

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, RouterModule, MaterialModule],
    exports: [MenuComponent],
})
export class HeaderModule {}
