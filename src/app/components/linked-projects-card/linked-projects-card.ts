import { Component, inject, Input } from '@angular/core';
import { BaseCard } from '../base-card/base-card';
import { Project } from '../../models/project';
import { Config } from '../../app.config';
import { Router } from '@angular/router';

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
  bucket = Config.bucketUrl;

  router = inject(Router)

  goToProject(name: string, id: number) {
    this.router.navigate(['/projects', name, id]);
  }
}
