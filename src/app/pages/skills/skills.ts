import { Component } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { Config } from '../../app.config';
import { TitleCasePipe } from '@angular/common';
import { SkillsCard } from '../../components/skills-card/skills-card';

@Component({
  selector: 'app-skills',
  imports: [
    BaseCard,
    SkillsCard,
    TitleCasePipe,
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  name = Config.repName
  school = Config.school
  sem = Config.sem
}
