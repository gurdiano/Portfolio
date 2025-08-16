import { Component, Input } from '@angular/core';
import { UserRoleProgress } from '../../models/user-role-progress';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-role-card-sm',
  imports: [],
  templateUrl: './role-card-sm.html',
  styleUrl: './role-card-sm.css'
})
export class RoleCardSm {
  @Input() roles!: UserRoleProgress[];
  bucket = environment.bucketUrl;
}
