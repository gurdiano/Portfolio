import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-card-sm',
  imports: [],
  templateUrl: './role-card-sm.html',
  styleUrl: './role-card-sm.css'
})
export class RoleCardSm {
  @Input() automationProgress?: number;
  @Input() developmentProgress?: number;
  @Input() managementProgress?: number;
  @Input() cloudProgress?: number;
  @Input() cybersecurityProgress?: number;
  @Input() softwareProgress?: number;
  @Input() databaseProgress?: number;
}
