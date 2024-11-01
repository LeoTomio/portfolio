export interface DictionaryType {
    workingPosition: string
    changeLanguage: string
    titles: Array<Titles>
    about: About
    skills: Array<Skills>
    contact: Contact
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

}

interface Links {
    icon: string
    title: string
    text: string
    link: string

}