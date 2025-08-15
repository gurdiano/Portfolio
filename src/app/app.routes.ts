import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Skills } from './pages/skills/skills';
import { Contact } from './pages/contact/contact';
import { Project } from './pages/project/project';
import { ProjectResolver } from './services/project/project-resolver';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: Home},
    {path: 'skills', component: Skills},
    {path: 'projects', component: Projects},
    {path: 'projects/:name/:id', component: Project, resolve: {project: ProjectResolver}},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
];
