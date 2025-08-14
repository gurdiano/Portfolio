import { ProjectConfig } from "./projectConfig";
import { Technology } from "./technology";
import { User } from "./user";

export interface Project {
    id: number;
    name: string;
    description: string;
    icon: string;
    user: User;
    config: string;
    images: string[];
    technologies: Technology[];
}