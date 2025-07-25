import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'skills', component: Home},
    {path: 'projects', component: Home},
    {path: 'about', component: Home},
    {path: 'contact', component: Home},
];
