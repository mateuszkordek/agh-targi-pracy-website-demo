import { convertD2W } from '@/store/utils'
export const state = () => ({

    // faq
    faqItems: [],

    // wszystkie kafelki
    infoBoxes: [],

    // home
    homePage: {},

    // rektor
    aboutRector: {},

    // o targach
    aboutPage: {},

    // program
    programPage: {},

    // archiwum
    archivePage: {},

    // dla pracodacow
    forEmployersPage: {},

    // centrum karier
    careersCentrePage: {},

    // wystawcy
    exhibitorsPage: {},

    // strona angielskojezyczna
    enPage: {},

    // stopka
    footer: {},

    // kontakt
    contact: {},
    socialMedia: {},

    regulations: {
        cookies: 'https://www.agh.edu.pl/polityka-obslugi-plikow-cookies/',
        terms: '/regulamin-wtp-agh-2021-jesień.pdf'
    },

    // cta
    fairSettings: null
})

export const mutations = {
    POPULATE_FAIR_SETTINGS(state, data) {
        state.fairSettings = data.acf
    },
    POPULATE_HOME_PAGE(state, data) {
        state.homePage = data.acf
    },
    POPULATE_RECTOR(state, data) {
        state.aboutRector = data.acf
    },
    POPULATE_ABOUT_PAGE(state, data) {
        state.aboutPage = data.acf
    },
    POPULATE_ARCHIVE_PAGE(state, data) {
        state.archivePage = data.acf
    },
    POPULATE_INFO_BOXES(state, data) {
        state.infoBoxes = data.map(a => convertD2W(a))
    },
    POPULATE_FAQ_ITEMS(state, data) {
        state.faqItems = data.acf.faqItems
    },
    POPULATE_FOR_EMPLOYERS_PAGE(state, data) {
        state.forEmployersPage = data.acf
    },
    POPULATE_CAREERS_CENTRE_PAGE(state, data) {
        state.careersCentrePage = data.acf
    },
    POPULATE_PROGRAM_PAGE(state, data) {
        state.programPage = data.acf
    },
    POPULATE_CONTACT_AND_SOCIAL_MEDIA(state, data) {
        state.contact = data.acf.contact
        state.socialMedia = data.acf.socialMedia
    },
    POPULATE_EXHIBITORS_PAGE(state, data) {
        state.exhibitorsPage = data.acf
    },
    POPULATE_EN_PAGE(state, data) {
        state.enPage = data.acf
    },
    POPULATE_FOOTER(state, data) {
        state.footer = data.acf
    },
}

export const getters = {
    getHomePage(state) {
        return state.homePage
    },
    getHomeBoxesSection(state) {
        return state.infoBoxes.filter(a => state.homePage.homeBoxesSection.includes(a.id))
    },
    getAboutRector(state) {
        return state.aboutRector
    },
    getAboutPage(state) {
        return state.aboutPage
    },
    getProgramPage(state) {
        return state.programPage
    },
    getArchivePage(state) {
        return state.archivePage
    },
    getAboutBoxesSection(state) {
        return state.infoBoxes.filter(a => state.aboutPage.aboutBoxesSection.boxes.includes(a.id))
    },
    getForEmployersPage(state) {
        return state.forEmployersPage
    },
    getForEmployersBoxesSection(state) {
        return state.infoBoxes.filter(a => state.forEmployersPage.forEmployersBoxesSection.boxes.includes(a.id))
    },
    getCareersCentrePage(state) {
        return state.careersCentrePage
    },
    getCareersCentreBoxesSection(state) {
        return state.infoBoxes.filter(a => state.careersCentrePage.careersCentreBoxesSection.boxes.includes(a.id))
    },
    getFaqItems(state) {
        return state.faqItems
    },
    getContact(state) {
        return state.contact
    },
    getSocialMedia(state) {
        return state.socialMedia
    },
    getFairSettings(state) {
        return state.fairSettings
    },
    getExhibitorsPage(state) {
        return state.exhibitorsPage
    },
    getEnPage(state) {
        return state.enPage
    },

    getFooter(state) {
        return state.footer
    },

    getRegulations(state) {
        return state.regulations
    }

}