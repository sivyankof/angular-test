import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HeaderRoutingModule {}
