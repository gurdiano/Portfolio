import { Role } from "./role";
import { User } from "./user";

export interface UserRoleProgress {
    userId: number;
    roleId: number;
    progress: number;
    role: Role;
    user: User;
}