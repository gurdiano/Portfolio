import { Injectable, inject} from '@angular/core';
import { DataJson } from '../data/data-json';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  data = inject(DataJson);

  private projectsResponse = this.data.getProjectResponse()
  
  getProjects(): any {
    return this.projectsResponse;
  }
}
