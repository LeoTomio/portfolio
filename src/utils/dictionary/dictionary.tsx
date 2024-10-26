export interface DictionaryType {
    changeLanguage: string
    titles: Array<Titles>
    about: About
    skils: Array<Skills>
}

interface Titles {
    title: string
    href: string
}

interface About {
    firstP: string
    secondP: string
    itens: Array<AboutItens>
}

interface AboutItens {
    text: string
}

interface Skills {
    title: string,
    description: string
}

