import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private http = inject (HttpClient);
  private apiUrl = Config.apiUrl;
  private id = Config.userID;

  getUserTechProgress(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}UserTechnologyProgress/user/${this.id}`);
  }
}