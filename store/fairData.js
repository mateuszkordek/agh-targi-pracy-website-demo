import { convertD2W, convertDBDateToTimestamp, getDateFromTimestamp } from '@/store/utils'
import moment from 'moment'


const sampleExhibitor = {
    name: 'Nazwa firmy',
    id: '6',
    logo: {
        sizes: {
            medium: '/images/sample-logo.png',
        }
    },
    fundraiser: true,
    tags: [{ tag: 'hashtag_1' }, { tag: 'hashtag_2' }, { tag: 'hashtag_3' }, { tag: 'hashtag_4' }],
    plans: `
        <h2>Praktyki, staże:</h2>
        <p>Każdego roku organizujemy wakacyjny staż IT (największe tego typu przedsięwzięcie w Europie). Uczestnikom naszego programu dajemy możliwość wejścia na rynek pracy i zdobycia cennego doświadczenia. Rekrutacja na staż: marzec - kwiecień 2020.</p>
        <ul>
            <li><strong>Program Summer Intern: </strong>Czas trwania: 3 miesiące, Wymiar Pracy: Pełny, Kandydaci: 2-5 rok studiów, Aplikacja: do końca kwietnia.</li>
            <li><strong>PIT Development Program (Traineeship): </strong>Czas trwania: 6-12 miesiący, Wymiar pracy: Niepełny (3-5 dni/ tydzień), Kandydaci: 3-5 rok studiów, absolwenci.</li>
            <li><strong>Manufacturing Internship: </strong>Czas trwania: 6-12 miesiący, Wymiar pracy: Niepełny (3-5 dni/ tydzień), Kandydaci: 3-5 rok studiów, absolwenci.</li>
        </ul>
    `,
    workplace: 'Katowice, Warszawa, Kraków',
    contact: {
        mainEmailAddress: 'hr@nazwa-firmy.com',
        otherEmailAddresses: ['hello@nazwa-firmy.com']
    },
    similar: []

}

export const state = () => ({
    exhibitors: [],
    editions: [],
    sampleExhibitor: sampleExhibitor
})

export const mutations = {
    POPULATE_EXHIBITORS(state, data) {
        data = data.map(a => convertD2W(a))
        data.forEach(a => {
            if (!a.tags) {
                a.tags = []
            }
            if (!a.similar) {
                a.similar = []
            }
            if (!a.similar) {
                a.similar = []
            }
            if (!a.contact.otherEmailAddresses) {
                a.contact.otherEmailAddresses = []
            }
        })
        state.exhibitors = data
    },
    POPULATE_EDITIONS(state, data) {
        data = data.map(a => convertD2W(a))
        data.forEach(a => {
            if (!!a.program) {
                a.program.forEach(b => {
                    b.start = convertDBDateToTimestamp(b.start)
                    b.end = convertDBDateToTimestamp(b.end)
                })
            }
        })
        state.editions = data
    }
}

export const getters = {
    // edycje
    getCurrentEdition(state) {
        return state.editions[0]
    },
    getAllEditions(state) {
        return state.editions
    },

    // webinary
    getWebinarsOfCurrentEdition(state, getters) {
        return getters.getCurrentEdition.program
    },
    getWebinarsOfCurrentEditionSortedByDay(state, getters) {
        function createNewDayAndPushToSorted(webinar) {
            let day = {
                date: getDateFromTimestamp(webinar.start),
                webinars: [webinar]
            }
            sortedByDays.push(day)
        }

        function sortWebinarsByTime(arrOfWebinars) {
            let webinarsCopy = JSON.parse(JSON.stringify(arrOfWebinars));
            webinarsCopy.sort((a, b) => {
                if (
                    moment(a.start, "x").isAfter(
                        moment(b.start, "x"),
                        "minutes"
                    )
                ) {
                    return 1;
                } else return -1;
            });
            return webinarsCopy;
        }

        let sortedByDays = []

        getters.getWebinarsOfCurrentEdition.map(a => {

            // pierwszy raz
            if (!sortedByDays.length) {
                createNewDayAndPushToSorted(a)
                return true
            }

            // szuka dnia
            let foundDay = sortedByDays.find(b => b.date == getDateFromTimestamp(a.start))
            if (!!foundDay) {
                foundDay.webinars.push(a)
            } else {
                createNewDayAndPushToSorted(a)
            }
        })

        sortedByDays.forEach(a => a.webinars = sortWebinarsByTime(a.webinars))

        return sortedByDays
    },

    // wystawcy
    getExhibitorsOfCurrentEdition(state, getters) {
        return state.exhibitors.filter(a => getters.getCurrentEdition.exhibitors.map(b => b.ID).includes(a.id)).sort(function (j, k) {
            if (j.name < k.name) { return -1; }
            if (j.name > k.name) { return 1; }
            return 0;
        })
    },
    getExhibitorsOfEdition(state, getters, id) {
        return (id) => {
            return state.exhibitors.filter(a => getters.getAllEditions.find(b => b.id == id)?.exhibitors.map(c => c.ID).includes(a.id)).sort(function (j, k) {
                if (j.name < k.name) { return -1; }
                if (j.name > k.name) { return 1; }
                return 0;
            })

            // return getters.getExhibitorsOfCurrentEdition
        }
    },
    getFundraisers(state, getters) {
        return getters.getExhibitorsOfCurrentEdition.filter(a => !!a.fundraiser)
    },
    getSampleExhibitor(state) {
        return state.sampleExhibitor
    },
    getAllHashtags(state, getters) {
        // wszystkie tagi
        let arr = []
        getters.getExhibitorsOfCurrentEdition.forEach(a => {
            a.tags.forEach(b => {
                if (!arr.includes(b.tag)) {
                    arr.push(b.tag)
                }
                // if (!arr.map(j => j.tag).includes(b.tag)) {
                //     arr.push(b)
                // }
            })
        })

        // mieszanko
        // function shuffle(array) {
        //     var currentIndex = array.length, temporaryValue, randomIndex;

        //     // While there remain elements to shuffle...
        //     while (0 !== currentIndex) {

        //         // Pick a remaining element...
        //         randomIndex = Math.floor(Math.random() * currentIndex);
        //         currentIndex -= 1;

        //         // And swap it with the current element.
        //         temporaryValue = array[currentIndex];
        //         array[currentIndex] = array[randomIndex];
        //         array[randomIndex] = temporaryValue;
        //     }

        //     return array;
        // }
        // arr = shuffle(arr);

        return arr.sort()
    },
    getHashtagsWithoutDays(state, getters) {
        return getters.getAllHashtags.filter(a => a != 'poniedziałek' && a != 'wtorek')
    },
    getDayHashtags(state, getters) {
        let dayTags = getters.getAllHashtags.filter(a => a == 'poniedziałek' || a == 'wtorek')
        let sortedDayTags = []
        if (dayTags.includes('poniedziałek')) sortedDayTags.push('poniedziałek')
        if (dayTags.includes('wtorek')) sortedDayTags.push('wtorek')
        return sortedDayTags
    }
}