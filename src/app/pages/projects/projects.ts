import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project/project-service';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects$!: any[];
  projectService = inject(ProjectService);

  constructor () {
    this.projects$ = this.projectService.getProjects();
  }
}
