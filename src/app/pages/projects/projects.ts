import { Component, inject } from '@angular/core';
import { ProjectService } from '../../services/project/project-service';
import { ProjectCard } from '../../components/project-card/project-card';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects$!: Observable<Project[]>;
  bucket = environment.bucketUrl;

  projectService = inject(ProjectService);

  constructor () {
    this.projects$ = this.projectService.getProjects();
  }
}
