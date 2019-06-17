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
    async DELETE_Activitie({commit}, id){
        await axios.delete(`http://localhost:3000/activities${id}`)
        commit('removeActivitie', id)
    }
}

const mutations = {
    setActivities: (state, activities) => (state.activitie = activities),
    removeActivitie: (state, id) => state.activities = state.activities.filter(act => act.id !== id)
}
export default {
    state,
    getters,
    actions,
    mutations
}