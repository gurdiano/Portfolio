import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { Config } from '../../app.config';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private api = 'http://pimenta.mercusysddns.com:5000/api';
  private id = Config.userID;

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.api}/Project/GetByUserId/${this.id}`);
  }
}