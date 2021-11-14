import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from 'src/app/shared-module/material/material.module';
import { HeaderRoutingModule } from './header-routing.module';

@NgModule({
    declarations: [MenuComponent],
    imports: [CommonModule, MaterialModule, HeaderRoutingModule],
    exports: [MenuComponent],
})
export class HeaderModule {}
