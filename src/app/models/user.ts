import { Project } from "./project";
import { UserRoleProgress } from "./user-role-progress";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    projects: Project[];
    userTechProgress: any;
    userRoleProgress: UserRoleProgress[];
}