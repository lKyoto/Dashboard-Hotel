<template>
  <v-timeline>
    <v-timeline-item
      v-for="room in allRooms" :key="room.id" class="room">
      <template v-slot:opposite>
        <span>AQUI VA LA FOTO!</span>
      </template>
      <v-card class="">
        <v-card-title class="">{{room.name}}</v-card-title>
        <v-card-text>
          {{room.description}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
 name: "Room",
 methods: {
   ...mapActions(['fetchRooms'])
 },
 computed: mapGetters(['allRooms']),
 created(){
   this.fetchRooms()
 } 
};
</script>

<style scoped>
  .rooms{
    display: grid;
   
  }
  .room{
      
  }
</style>