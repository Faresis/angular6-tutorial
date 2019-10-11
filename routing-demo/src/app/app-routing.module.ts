import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

import { AboutComponent, MessagesComponent, LoginComponent, PathNotFoundComponent, AuthGuard, CustomPreloadingStrategyService } from './core';

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService,
  enableTracing: true
};

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login' }
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
        loadChildren: 'app/admin/admin.module#AdminModule',
        data: { title: 'Admin' }
    },
    {
        path: 'users',
        loadChildren: 'app/users/users.module#UsersModule',
        data: {
                preload: true,
                title: 'Users'
              }
    },
    {
        path: '**',
        component: PathNotFoundComponent,
        data: { title: 'Page Not Found' }
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, extraOptions)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
