import axios from 'axios'
const state = {
    rooms: []
};
const getters = {
    allRooms: state => state.rooms
}
const actions = {
    async fetchRooms({ commit }) {
        const response = await axios.get('http://localhost:3000/rooms')
        console.log(response.data)
        console.log(response)
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