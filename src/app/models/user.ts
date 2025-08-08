import { Project } from "./project";
import { UserRoleProgress } from "./user-role-progress";
import { UserTechProgress } from "./user-tech-progress";

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    projects: Project[];
    userTechProgress: UserTechProgress[];
    userRoleProgress: UserRoleProgress[];
}