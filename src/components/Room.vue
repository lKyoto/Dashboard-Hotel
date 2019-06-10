<template>

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