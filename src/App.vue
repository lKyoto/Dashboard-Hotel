<template>
  <v-app>
    <v-content>
      <v-container>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title">Hotel</v-toolbar-title>
        <router-link to="/">Home</router-link>|
        <router-link to="/room">Room</router-link>|
        <router-link to="/activitie">Activitie</router-link>|
        <router-link to="/about">About</router-link>
      </v-toolbar>
        <router-view/>
        <v-footer class="primary">
          <v-spacer row wrap align-center></v-spacer>
          <v-flex xs12>
            <div>&copy; {{ new Date().getFullYear() }}</div> 
          </v-flex>
        </v-footer>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>


export default {
  name: "App",

  data() {
    return {
      title: ""
      //
    };
  },
};
</script>

<style>
    
</style>
