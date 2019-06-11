<template>
  <v-app dark>
    <v-content>
      <v-container>
      <v-toolbar >
        <v-toolbar-title v-text="title">Hotel</v-toolbar-title>
        <router-link to="/">Home</router-link>|
        <router-link to="/room">Room</router-link>|
        <router-link to="/activitie">Activitie</router-link>|
        <router-link to="/activitie/create">Crear Actividad</router-link>|
        <router-link to="/about">About</router-link>
         <v-spacer></v-spacer>
        <router-link to="/login">Log in</router-link>
      </v-toolbar>
        <router-view/>
        
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
