import { Icon } from "./icon";
import { Project } from "./project";
import { UserTechProgress } from "./user-tech-progress";

export interface Technology {
    id: number;
    name: string;
    icon: Icon;
    progress: UserTechProgress[];
    projects: Project[];
}