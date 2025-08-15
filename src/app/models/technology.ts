import { Icon } from "./icon";
import { Project } from "./project";

export interface Technology {
    id: number;
    name: string;
    icon: Icon;
    progress: any;
    projects: Project[];
}