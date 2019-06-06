<template>
  <v-app>
    <v-content>
      <v-container>
        <Room />
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Room from  './components/Room'

export default {
  name: 'App',
  components: {
    Room
  },
  data () {
    return {
      //
    }
  }
}
</script>
