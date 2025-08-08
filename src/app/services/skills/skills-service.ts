import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTechProgress } from '../../models/user-tech-progress';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  http: HttpClient = inject (HttpClient);
  api: string = '';

  getUserTechProgress(): Observable<UserTechProgress> {
    return this.http.get<UserTechProgress>(`${this.api}`);
  }
}