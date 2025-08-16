import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private http = inject (HttpClient);
  private apiUrl = environment.apiUrl;
  private id = environment.userId;

  getUserTechProgress(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}UserTechnologyProgress/user/${this.id}`);
  }
}