import axios from 'axios'

const state = {
    rooms: []
}

const getters = {
    get_all_rooms: state => state.rooms
}

const actions = {
    async fetchAll({ commit }) {
        const response = await axios.get('http://localhost:3000/rooms/')
        console.log(response.data)
    }
}

const mutations = {

}

export default {
    state,
    getters,
    actions,
    mutations
}