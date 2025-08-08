import { User } from "./user";
import { Technology } from "./technology";


export interface UserTechProgress { 
    userId: number;
    technologyId: number;
    progress: number;
    user: User;
    technologies: Technology;
}