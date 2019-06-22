<template>
  <v-app light>
    <v-content>
      <v-container>
        <v-toolbar>
              <router-link to="/">Home</router-link>|
              <router-link to="/room">Room</router-link>|
              <router-link to="/activitie">Activitie</router-link>|
              <router-link to="/activitie/create">Crear Actividad</router-link>|
              <router-link to="/about">About</router-link>
            <v-spacer></v-spacer>
              <router-link to="/login">Log in</router-link><span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
        </v-toolbar>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
  }
</script>