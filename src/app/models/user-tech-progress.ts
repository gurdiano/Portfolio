import { Role } from "./role";
import { User } from "./user";

export interface UserTechProgress { 
    userId: number;
    technologyId: number;
    progress: number;
    role: Role;
    user: User;
}