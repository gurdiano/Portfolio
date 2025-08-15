import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,} from 'rxjs';
import { Project } from '../../models/project';
import { Config } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private apiUrl = Config.apiUrl;
  private id = Config.userID;
  
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}Project/GetByUserId/${this.id}`);
  }

  getProjectById(id: any): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}Project/${id}`);
  } 
}