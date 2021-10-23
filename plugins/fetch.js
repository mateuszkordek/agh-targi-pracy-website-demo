import axios from "axios";

let fetchStore = async that => {
    let apiBaseUrl = "https://admin.enlighten.pl/agh/wp-json/wp/v2"

    // wystawcy
    async function fetchExhibitors() {
        let response = await axios.get(
            `${apiBaseUrl}/exhibitors?per_page=100`
        );
        that.$store.commit("fairData/POPULATE_EXHIBITORS", response.data);
    }

    // info boxes
    async function fetchInfoBoxes() {
        let response = await axios.get(
            `${apiBaseUrl}/boxes?per_page=100`
        );
        that.$store.commit("resources/POPULATE_INFO_BOXES", response.data);
    }

    // edycje
    async function fetchEditions() {
        let response = await axios.get(
            `${apiBaseUrl}/editions?per_page=100`
        );
        that.$store.commit("fairData/POPULATE_EDITIONS", response.data);
    }

    // pages
    async function fetchPages() {
        let response = await axios.get(
            `${apiBaseUrl}/pages?per_page=100`
        );

        // ustawienia wyswietlania
        let fairSettings = response.data.find(r => r.slug == 'ustawienia-wyswietlania-informacji-o-targach')
        if (!!fairSettings) {
            console.log('fairSettings', fairSettings)
            that.$store.commit("resources/POPULATE_FAIR_SETTINGS", fairSettings);
            that.$store.commit("navigation/SET_FIRST_NAV_BOX", fairSettings);
            that.$store.commit("navigation/SET_PAGES_DISPLAY", fairSettings);
        }

        // strona glowna
        let homePage = response.data.find(r => r.slug == 'strona-glowna')
        if (!!homePage) {
            that.$store.commit("resources/POPULATE_HOME_PAGE", homePage);
        }

        // o targach
        let aboutPage = response.data.find(r => r.slug == 'o-targach')
        if (!!aboutPage) {
            that.$store.commit("resources/POPULATE_ABOUT_PAGE", aboutPage);
        }

        // archiwum edycji
        let archivePage = response.data.find(r => r.slug == 'archiwum-edycji')
        if (!!archivePage) {
            that.$store.commit("resources/POPULATE_ARCHIVE_PAGE", archivePage);
        }

        // rektor
        let aboutRector = response.data.find(r => r.slug == 'rektor')
        if (!!aboutRector) {
            that.$store.commit("resources/POPULATE_RECTOR", aboutRector);
        }

        // faq
        let faqItems = response.data.find(r => r.slug == 'faq')
        if (!!faqItems) {
            that.$store.commit("resources/POPULATE_FAQ_ITEMS", faqItems);
        }

        // program
        let programPage = response.data.find(r => r.slug == 'program')
        if (!!programPage) {
            that.$store.commit("resources/POPULATE_PROGRAM_PAGE", programPage);
        }

        // dla pracodawcow
        let forEmployersPage = response.data.find(r => r.slug == 'dla-pracodawcow')
        if (!!forEmployersPage) {
            that.$store.commit("resources/POPULATE_FOR_EMPLOYERS_PAGE", forEmployersPage);
        }

        // centrum karier
        let careersCentrePage = response.data.find(r => r.slug == 'centrum-karier-agh')
        if (!!careersCentrePage) {
            that.$store.commit("resources/POPULATE_CAREERS_CENTRE_PAGE", careersCentrePage);
        }

        // wystawcy
        let exhibitorsPage = response.data.find(r => r.slug == 'wystawcy')
        if (!!exhibitorsPage) {
            that.$store.commit("resources/POPULATE_EXHIBITORS_PAGE", exhibitorsPage);
        }

        // strona angielskojezyczna
        let enPage = response.data.find(r => r.slug == 'strona-angielskojezyczna')
        if (!!enPage) {
            that.$store.commit("resources/POPULATE_EN_PAGE", enPage);
        }

        // stopka
        let footer = response.data.find(r => r.slug == 'stopka')
        if (!!footer) {
            that.$store.commit("resources/POPULATE_FOOTER", footer);
        }

        // kontakt i social media
        let contactAndSocialMedia = response.data.find(r => r.slug == 'dane-kontaktowe-i-social-media')
        if (!!contactAndSocialMedia) {
            that.$store.commit("resources/POPULATE_CONTACT_AND_SOCIAL_MEDIA", contactAndSocialMedia);
        }

        // nav boxes
        let navBoxes = response.data.find(r => r.slug == 'kafelki-ze-zdjeciami')
        if (!!navBoxes) {
            that.$store.commit("navigation/SET_NAV_BOXES", navBoxes);
        }


    }




    let t1 = await fetchExhibitors()
    let t2 = await fetchInfoBoxes()
    let t3 = await fetchEditions()
    let t4 = await fetchPages()
};

export default fetchStore;
