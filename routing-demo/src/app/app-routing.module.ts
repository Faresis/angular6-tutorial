import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, MessagesComponent, LoginComponent, PathNotFoundComponent, AuthGuard } from './core';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'messages',
        component: MessagesComponent,
        outlet: 'popup'
    },
    {
        path: 'admin',
        canLoad: [AuthGuard],
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule'
    },
    {
        path: '**',
        component: PathNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
