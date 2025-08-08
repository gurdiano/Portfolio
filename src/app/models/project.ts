import { Technology } from "./technology";
import { User } from "./user";

export interface Project {
    id: number;
    name: string;
    description: string;
    download: string;
    git: string;
    icon: string;
    user: User;
    technologies: Technology[];
}