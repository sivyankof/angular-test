import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, MatListModule, RouterModule],
    exports: [MenuComponent],
})
export class HeaderModule {}
