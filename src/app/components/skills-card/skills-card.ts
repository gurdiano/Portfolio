import { AsyncPipe, JsonPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Config } from '../../app.config';
import { LinkedProjectsCard } from '../linked-projects-card/linked-projects-card';

@Component({
  selector: 'app-skills-card',
  imports: [
    UpperCasePipe, 
    NgClass, 
    JsonPipe, 
    AsyncPipe,
    LinkedProjectsCard,
  ],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css'
})
export class SkillsCard {
  @Input() stackName?: string = 'stack';
  @Input() technologies!: any;
  bucket = Config.bucketUrl;
}