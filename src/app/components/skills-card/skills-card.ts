import { NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  imports: [UpperCasePipe, NgClass],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css'
})
export class SkillsCard {
  @Input() stackName?: string = 'stack';
  @Input() technologies?: any;
  
}