import { Component, inject } from '@angular/core';
import { Config } from '../../app.config';
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
  school = Config.school;
  name = Config.repName;
  roleSequence = Config.roles;
  bucket = Config.bucketUrl;
  roles$!: Observable<UserRoleProgress[]>;
  rolesService = inject(RolesService);
  
  constructor () {
    this.roles$ = this.rolesService.getRolesProgress();
  }
}
