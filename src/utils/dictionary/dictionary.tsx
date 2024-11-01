export interface DictionaryType {
    workingPosition: string
    changeLanguage: string
    titles: Array<Titles>
    about: About
    skills: Array<Skills>
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


