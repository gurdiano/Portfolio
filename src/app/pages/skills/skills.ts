import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { Config } from '../../app.config';
import { SlicePipe, TitleCasePipe } from '@angular/common';
import { SkillsCard } from '../../components/skills-card/skills-card';
import { DataJson } from '../../services/data/data-json';

@Component({
  selector: 'app-skills',
  imports: [
    BaseCard,
    SkillsCard,
    TitleCasePipe,
    SlicePipe,
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  technologies$!: any;
  name = Config.repName;
  school = Config.school;
  sem = Config.sem;
  favorite = Config.skills.favorite;

  service = inject(DataJson);

  constructor () {
    this.technologies$ = this.service.getTechnologiesResponse();
  }
}
