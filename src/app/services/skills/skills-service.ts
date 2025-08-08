import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserTechProgress } from '../../models/user-tech-progress';
import { Config } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private http = inject (HttpClient);
  private apiUrl = 'http://pimenta.mercusysddns.com:5000/api';
  private id = Config.userID;

  getUserTechProgress(): Observable<UserTechProgress[]> {
    return this.http.get<UserTechProgress[]>(`${this.apiUrl}/UserTechnologyProgress/user/${this.id}`);
  }
}