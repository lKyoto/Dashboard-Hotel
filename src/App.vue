<template>
  <v-app>
    <v-content>
      <v-container>
        <router-link to="/">Home </router-link> |
        <router-link to="/room">Room</router-link> | 
        <router-link to="/about">About</router-link>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  
  data () {
    return {
      //
    }
  }
}
</script>
