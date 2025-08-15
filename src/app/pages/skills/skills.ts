import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { Config } from '../../app.config';
import { AsyncPipe, JsonPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { SkillsCard } from '../../components/skills-card/skills-card';
import { SkillsService } from '../../services/skills/skills-service';
import { Observable } from 'rxjs';
import { FilterByIdsPipe } from './pipes/filter-by-ids-pipe';
import { ExcludeByIdsPipe } from './pipes/exclude-by-ids-pipe';

@Component({
  selector: 'app-skills',
  imports: [
    BaseCard,
    SkillsCard,
    TitleCasePipe,
    SlicePipe,
    AsyncPipe,
    FilterByIdsPipe,
    ExcludeByIdsPipe,
    JsonPipe,
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  name = Config.repName;
  school = Config.school;
  sem = Config.sem;
  favorite = Config.skills.favorite;
  mainStack = Config.mainStack;
  secondaryStack = Config.secondaryStack;
  others = this.mainStack.concat(this.secondaryStack);

  technologies$!: Observable<any>;

  skillsService = inject(SkillsService);

  constructor () {
     this.technologies$ = this.skillsService.getUserTechProgress();
  }
}
