import axios from 'axios'
const state = {
    activitie: []
}
const getters = {
    allActivities: state => state.activitie
}
const actions = {
    async fetchActivitie({ commit }) {
        const response = await axios.get('http://localhost:3000/activities')
        console.log(response.data)
        console.log(response)
        commit('setActivities', response.data)
    }
}
const mutations = {
    setActivities: (state, activitie) => (state.activitie = activitie)
}
export default {
    state,
    getters,
    actions,
    mutations
}