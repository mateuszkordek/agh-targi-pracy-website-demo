export const state = () => ({
    navigation: [
        {
            name: 'Strona główna',
            to: '/'
        },
        {
            name: 'Wystawcy',
            to: '/wystawcy',
            hide: false
        },
        {
            name: 'O Targach',
            to: '/o-targach'
        },
        {
            name: 'Program',
            to: '/program',
            hide: false
        },
        {
            name: 'Dla pracodawców',
            to: '/dla-pracodawcow'
        },
        {
            name: 'Centrum Karier',
            to: '/centrum-karier-agh'
        },
        {
            name: 'Archiwum',
            to: '/archiwum-edycji'
        },
        {
            name: 'Kontakt',
        }
    ],
    navBoxes: [
        {},
        {},
        {}
    ]
})

export const getters = {
    getNavigation(state) {
        return state.navigation.filter(a => !a.hide)
    },
    getNavBoxes(state) {
        return state.navBoxes
    }
}

export const mutations = {
    SET_PAGES_DISPLAY(state, fairSettings) {
        state.navigation = state.navigation.map(a => {
            // podstrona wystawcow
            if (a.to == '/wystawcy') {
                a.hide = !fairSettings.acf.otherWebsiteElements.showExhibitors
            }

            // podstrona programu
            if (a.to == '/program') {
                a.hide = !fairSettings.acf.otherWebsiteElements.showProgram
            }

            return a
        })
    },
    SET_FIRST_NAV_BOX(state, fairSettings) {
        state.navBoxes[0].header = fairSettings.acf.callToAction.box.header
        state.navBoxes[0].text = fairSettings.acf.callToAction.box.text
        state.navBoxes[0].href = fairSettings.acf.callToAction.href
        state.navBoxes[0].img = fairSettings.acf.callToAction.box.img
    },
    SET_NAV_BOXES(state, data) {
        state.navBoxes[1] = data.acf.box2
        state.navBoxes[2] = data.acf.box3
    }
}