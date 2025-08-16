import { Project } from "./project";
import { Role } from "./role";

export interface UserRoleProgress {
    userId: number;
    roleId: number;
    progress: number;
    role: Role;
    projects: Project[];
}