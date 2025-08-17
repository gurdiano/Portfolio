import { RenderMode, ServerRoute } from '@angular/ssr';
import { Project } from './pages/project/project';

export const serverRoutes: ServerRoute[] = [

  {
    path: 'projects/:name/:id',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
