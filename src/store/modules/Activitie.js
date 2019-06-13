import axios from 'axios'
const state = {
    activitie: []
}
const getters = {
    allActivities: state => state.activitie
}
const actions = {
    async GET_Activitie({ commit }) {
        const response = await axios.get('http://localhost:3000/activities')
        console.log(response.data)
        console.log(response)
        commit('setActivities', response.data)
    },
}

const mutations = {
    setActivities: (state, activities) => (state.activitie = activities),
}
export default {
    state,
    getters,
    actions,
    mutations
}