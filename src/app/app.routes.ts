import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component')
    },
    {
        path: 'muro',
        loadComponent: () => import('./muro/muro.component')
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
