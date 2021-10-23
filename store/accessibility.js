export const state = () => ({
    wcagStep: 1,
    darkmode: false
})



export const mutations = {
    setWcagStep(state, step) {
        state.wcagStep = step
        // console.log('ustawiono step')
    },
    setDarkmode(state, boolean) {
        state.darkmode = boolean
        // console.log('ustawiono darkmode')
    }
}

export const actions = {
    SET_WCAG_STEP({ commit }, step) {
        commit('setWcagStep', step)
    },
    SET_DARK_MODE({ commit }, boolean) {
        commit('setDarkmode', boolean)
    }
}

export const getters = {
    getWcagStep(state) {
        return state.wcagStep
    },
    getDarkmode(state) {
        return state.darkmode
    }
}