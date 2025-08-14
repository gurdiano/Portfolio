interface git {
    name: string,
    link: string
}
interface download {
    name: string,
    link: string,
    icon: string
}
interface step {
    name: string,
    image: string,
    description: string
}
interface document {
    name: string,
    icon: string,
    link: string
}

export interface ProjectConfig {
    version: string;
    gitConfig: {
        gits: git[]
    },
    downloadConfig: {
        name:string,
        plataforms: download[],
        steps: step[]
    },
    documentConfig: {
        documents: document[]
    }
}