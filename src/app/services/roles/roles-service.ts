import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Config } from '../../app.config';
import { Observable } from 'rxjs';
import { UserRoleProgress } from '../../models/user-role-progress';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  http = inject(HttpClient);
  apiUrl = Config.apiUrl;
  userId = Config.userID;

  getRolesProgress(): Observable<UserRoleProgress[]> {
    return this.http.get<UserRoleProgress[]>(`${this.apiUrl}UserRoleProgress/user/${this.userId}`);
  }
}
