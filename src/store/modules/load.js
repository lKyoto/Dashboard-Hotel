
const state = {
    loading: {
        title: '',
        est: false
    }
}
const getters = {

}

const actions = {

}

const mutations = {
    showLoading(state, payload) {
        state.loading.title = payload.title,
            est.loading.state = true
    },
    hiddenLoading(state) {
        state.loading.est = false
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}