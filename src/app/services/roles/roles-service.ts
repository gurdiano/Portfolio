import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRoleProgress } from '../../models/user-role-progress';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  userId = environment.userId;

  getRolesProgress(): Observable<UserRoleProgress[]> {
    return this.http.get<UserRoleProgress[]>(`${this.apiUrl}UserRoleProgress/user/${this.userId}`);
  }
}
