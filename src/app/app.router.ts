import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const router: Routes = [
    {
        path: '',
        loadChildren: 'app/components/account/account.module#AccountModule'
    },
    {
        path: 'home',
        loadChildren: 'app/components/home/home.module#HomeModule'
    },
    {
        path: 'teste',
        loadChildren: 'app/components/teste/teste.module#TesteModule'
    },

    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
    // { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);