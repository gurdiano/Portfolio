import { Component } from '@angular/core';
import { Config } from '../../app.config';
import { RoleCard } from '../../components/role-card/role-card';
import { RoleCardSm } from '../../components/role-card-sm/role-card-sm';

@Component({
  selector: 'app-home',
  imports: [
    RoleCard,
    RoleCardSm,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  school = Config.school;
  name = Config.repName;

  // role-progress-info
  automationProgress = 70;
  developmentProgress = 50;
  managementProgress = 60;
  cloudProgress = 30;
  cybersecurityProgress = 20;
  softwareProgress = 40;
  databaseProgress = 50;
}
