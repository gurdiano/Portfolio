import { Component, inject } from '@angular/core';
import { RoleCard } from '../../components/role-card/role-card';
import { RoleCardSm } from '../../components/role-card-sm/role-card-sm';
import { BaseCard } from '../../components/base-card/base-card';
import { RouterLink } from '@angular/router';
import { LinkedProjectsCard } from '../../components/linked-projects-card/linked-projects-card';
import { UserRoleProgress } from '../../models/user-role-progress';
import { RolesService } from '../../services/roles/roles-service';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FindRolePipe } from './pipes/find-role-pipe';
import { AppConfig, ConfigService } from '../../services/data/config-service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  imports: [
    RoleCard,
    RoleCardSm,
    BaseCard,
    RouterLink,
    LinkedProjectsCard,
    JsonPipe,
    AsyncPipe,
    FindRolePipe,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  roles$!: Observable<UserRoleProgress[]>;
  config!: AppConfig;
  bucket = environment.bucketUrl;
  
  rolesService = inject(RolesService);
  configService = inject(ConfigService);
  
  constructor () {
    this.roles$ = this.rolesService.getRolesProgress();
    this.config = this.configService.getConfig();
  }
}
