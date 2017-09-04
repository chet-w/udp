import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component/home.component';
import { AboutComponent } from './about.component/about.component';
import { ContactComponent } from './contact.component/contact.component';
import { ServicesComponent } from './services.component/services.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },{
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);