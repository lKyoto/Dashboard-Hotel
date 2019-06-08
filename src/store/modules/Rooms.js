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
        commit('setRooms', response.data)
    }
}

const mutations = {
    setRooms: (state, rooms) => (state.rooms = rooms)
}

export default {
    state,
    getters,
    actions,
    mutations
}