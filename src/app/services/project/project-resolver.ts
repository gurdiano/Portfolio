import { inject, Injectable } from "@angular/core";
import { ProjectService } from "./project-service";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Project } from "../../models/project";
import { Observable } from "rxjs";

@Injectable ({
    providedIn: 'root'
})
export class ProjectResolver implements Resolve<Project> {
    private service = inject(ProjectService);
    private router = inject(Router);

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Project> {
        const id = route.paramMap.get('id')
        const navigate = this.router.getCurrentNavigation()
        const projectFromState = navigate?.extras.state?.['project'];

        if (projectFromState){
            return projectFromState;
        }

        return this.service.getProjectById(id);
    }
}