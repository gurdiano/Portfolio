import { Component, Input } from '@angular/core';
import { BaseCard } from '../base-card/base-card';


const Role = {
  projects: [
    {name: 'GurSchedule', icon:''},
    {name: 'Indeniza', icon:''},
    {name: 'Portfolio', icon:''},
    {name: 'Portfolio', icon:''},
  ]
}

@Component({
  selector: 'app-linked-projects-card',
  imports: [
    BaseCard,
  ],
  templateUrl: './linked-projects-card.html',
  styleUrl: './linked-projects-card.css'
})
export class LinkedProjectsCard {
  @Input() role = Role;
}
