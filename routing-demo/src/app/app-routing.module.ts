import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent, MessagesComponent, PathNotFoundComponent } from './core';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
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