export interface DictionaryType {
    workingPosition: string
    changeLanguage: string
    titles: Array<Titles>
    about: About
    skills: Array<Skills>
    contact: Contact
    // projects:Array<Project>
}
interface Titles {
    title: string
    href: string
}
interface About {
    firstP: string
    secondP: string
    itens: Array<string>
}
interface Skills {
    icon: string
    title: string
    description: string
    knowledgeLevel: string
    link: string
}
interface Contact {
    description: string
    links: Array<Links>
    curriculumText: string
    curriculumButton: string

}
interface Links {
    icon: string
    title: string
    text: string
    link: string
}
export interface Project {
    id: number
    title: string;
    image: string;
    technologies: Array<String>
    shortDescription: string;

}

export interface DetailedProject extends Pick<Project, 'id' | 'title' | 'technologies'> {
    description:{
        
    }
}
interface GithubProject {
    buttonName: string;
    link: string;
    isPrivate: boolean;
}