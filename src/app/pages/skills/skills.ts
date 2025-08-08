import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { Config } from '../../app.config';
import { AsyncPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { SkillsCard } from '../../components/skills-card/skills-card';
import { SkillsService } from '../../services/skills/skills-service';
import { Observable } from 'rxjs';
import { UserTechProgress } from '../../models/user-tech-progress';

@Component({
  selector: 'app-skills',
  imports: [
    BaseCard,
    SkillsCard,
    TitleCasePipe,
    SlicePipe,
    AsyncPipe,
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  name = Config.repName;
  school = Config.school;
  sem = Config.sem;
  favorite = Config.skills.favorite;

  technologies$!: Observable<UserTechProgress[]>;

  skillsService = inject(SkillsService);

  constructor () {
     this.technologies$ = this.skillsService.getUserTechProgress();
  }
}
