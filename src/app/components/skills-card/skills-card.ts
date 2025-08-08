import { JsonPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserTechProgress } from '../../models/user-tech-progress';

@Component({
  selector: 'app-skills-card',
  imports: [UpperCasePipe, NgClass, JsonPipe],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css'
})
export class SkillsCard {
  @Input() stackName?: string = 'stack';
  @Input() technologies!: UserTechProgress[];
}