import { Icon } from "./icon";
import { UserRoleProgress } from "./user-role-progress";

export interface Role {
    id: number;
    name: string;
    icon: Icon;
    userRoleProgress: UserRoleProgress[];
}