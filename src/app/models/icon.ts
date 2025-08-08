import { Role } from "./role";
import { Technology } from "./technology";

export interface Icon {
    id: number;
    name: string;
    path: string;
    roles: Role[];
    technologies: Technology[];
}