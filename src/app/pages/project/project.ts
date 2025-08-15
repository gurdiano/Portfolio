import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { JsonPipe, SlicePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project as ProjectModel } from '../../models/project';
import { Config } from '../../app.config';


@Component({
  selector: 'app-project',
  imports: [
    BaseCard,
    SlicePipe,
    JsonPipe,
  ],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {
  bucket = Config.bucketUrl
  project!: ProjectModel;
  route = inject(ActivatedRoute);
  selectedImage: string | null = null;

  constructor () {
    this.project = this.route.snapshot.data['project']
  }

  openImage(img: string) {
    this.selectedImage = img;
  }
  closeImage(event?: MouseEvent) {
    if (event) event.stopPropagation();
    this.selectedImage = null;
  }
  openDownload() {
  const collapseTwo = document.getElementById('panelsStayOpen-collapseTwo');
  if (collapseTwo) {
    (window as any).bootstrap.Collapse.getOrCreateInstance(collapseTwo).show();

    // delay to scroll
    setTimeout(() => {
      collapseTwo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
}
}
