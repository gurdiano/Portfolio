import { AsyncPipe, JsonPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Config } from '../../app.config';

@Component({
  selector: 'app-skills-card',
  imports: [
    UpperCasePipe, 
    NgClass, 
    JsonPipe, 
    AsyncPipe
  ],
  templateUrl: './skills-card.html',
  styleUrl: './skills-card.css'
})
export class SkillsCard {
  @Input() stackName?: string = 'stack';
  @Input() technologies!: any;
  bucket = Config.bucketUrl;
}