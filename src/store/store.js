import Vue from 'vue'
import Vuex from 'vuex'
import Room from './modules/Rooms'
import Load from './modules/load'
import Activitie from './modules/Activitie'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Room,
    Activitie,
    Load
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})