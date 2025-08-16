import { Component, inject } from '@angular/core';
import { BaseCard } from '../../components/base-card/base-card';
import { AsyncPipe, JsonPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { SkillsCard } from '../../components/skills-card/skills-card';
import { SkillsService } from '../../services/skills/skills-service';
import { Observable } from 'rxjs';
import { FilterByIdsPipe } from './pipes/filter-by-ids-pipe';
import { ExcludeByIdsPipe } from './pipes/exclude-by-ids-pipe';
import { AppConfig, ConfigService } from '../../services/data/config-service';
import { environment } from '../../../environments/environment';

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
  technologies$!: Observable<any>;
  config!: AppConfig;
  bucket = environment.bucketUrl;
  
  skillsService = inject(SkillsService);
  configService = inject(ConfigService);

  constructor () {
     this.technologies$ = this.skillsService.getUserTechProgress();
     this.config = this.configService.getConfig();
  }
}
