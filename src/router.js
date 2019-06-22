import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/room',
      name: 'room',
      component: () => import(/* webpackChunkName: "room" */ './views/Room.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/activitie',
      name: 'activitie',
      component: () => import(/* webpackChunkName: "activitie" */ './views/Activitie.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/activitie/create',
      name: 'create_activitie',
      component: () => import(/* webpackChunkName: "create_activitie" */ './views/Create_Activitie.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue'),
      meta: {
        guest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router