import { Technology } from "./technology";
import { User } from "./user";

export interface Project {
    id: number;
    name: string;
    description: string;
    icon: string;
    user: User;
    config: string;
    configJson: any;
    images: string[];
    technologies: Technology[];
}