import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared-module/guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    {
        path: 'auth',
        loadChildren: () =>
            import('./features/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () =>
            import('./features/header/header.module').then(
                (m) => m.HeaderModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () =>
            import('./features/not-found-page/not-found-page.module').then(
                (m) => m.NotFoundPageModule
            ),
    },
    // { path: '', loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
