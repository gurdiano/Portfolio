import { Component, inject, Input } from '@angular/core';
import { BaseCard } from '../base-card/base-card';
import { Project } from '../../models/project';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-linked-projects-card',
  imports: [
    BaseCard,
  ],
  templateUrl: './linked-projects-card.html',
  styleUrl: './linked-projects-card.css'
})
export class LinkedProjectsCard {
  @Input() projects!: Project[];
  bucket = environment.bucketUrl;

  router = inject(Router)

  goToProject(name: string, id: number) {
    this.router.navigate(['/projects', name, id]);
  }
}
