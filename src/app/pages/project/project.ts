import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { JsonPipe, SlicePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project as ProjectModel } from '../../models/project';
import { environment } from '../../../environments/environment';


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
  project!: ProjectModel;
  selectedImage: string | null = null;
  bucket = environment.bucketUrl

  route = inject(ActivatedRoute);
  
  constructor () {
    this.project = this.route.snapshot.data['project'];
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
