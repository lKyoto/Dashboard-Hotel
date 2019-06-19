<template>
  <v-app light>
    <v-content>
      <v-container>
        <v-toolbar>
          <ul>
            <li>
              <router-link to="/">Home</router-link>|
            </li>
            <li>
              <router-link to="/room">Room</router-link>|
            </li>
            <li>
              <router-link to="/activitie">Activitie</router-link>|
            </li>
            <li>
              <router-link to="/activitie/create">Crear Actividad</router-link>|
            </li>
            <li v-if="auth==''" >
              <router-link to="/about">About</router-link>|
            </li>
            <v-spacer></v-spacer>
            <li>
              <router-link to="/login">Log in</router-link>|
            </li>
            <li v-if="auth=='loggdin'">
              <router-link to="/">Log out</router-link>|
            </li>
          </ul>
        </v-toolbar>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// import EventBus from '../components/EventBus'
// EventBus.$on('logged-in', test =>{
//     console.log(test)
// })

export default {
  data() {
    return {
      auth: "",
      user: ""
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("usertoken");
    }
  },
  mounted() {
    EventBus.$on("logged-in", status => {
      this.auth = status;
    });
  }
};
</script>

<style scoped>
li {
  display: inline;
}
</style>
