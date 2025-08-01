import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'skills', component: Home},
    {path: 'projects', component: Projects},
    {path: 'about', component: About},
    {path: 'contact', component: Home},
];
