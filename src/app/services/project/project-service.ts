import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { Project } from '../../models/project';
import { Config } from '../../app.config';
import { ProjectConfig } from '../../models/projectConfig';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private apiUrl = Config.apiUrl;
  private id = Config.userID;
  private bucketUrl = Config.bucketUrl
  
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}Project/GetByUserId/${this.id}`);
  }

}