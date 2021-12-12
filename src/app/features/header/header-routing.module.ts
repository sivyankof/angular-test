import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/shared-module/guards/auth.guard';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        loadChildren: () =>
            import('../users/users.module').then((m) => m.UsersModule),
        canLoad: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HeaderRoutingModule {}
