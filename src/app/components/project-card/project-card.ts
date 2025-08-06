import { Component, Input } from '@angular/core';
import { BaseCard } from '../base-card/base-card';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [
    BaseCard,
    SlicePipe,
  ],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  @Input() projectIcon!: string;
  @Input() name?: string = 'Project Name';
  @Input() description: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum illum quisquam est asperiores';
  @Input() tech1!: string;
  @Input() tech2!: string;
  @Input() tech3!: string;
  @Input() tech4!: string;
  @Input() techIconPath1!: string;
  @Input() techIconPath2!: string;
  @Input() techIconPath3!: string;
  @Input() techIconPath4!: string;
  @Input() gitRepository!: string;
  @Input() downloadLink!: string;
}
