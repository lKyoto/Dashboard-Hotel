<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in allActivities" :key="item.id" class="room">
      <template v-slot:opposite>
        <span>{{item.date}}</span>
      </template>
      <v-card class="">
        <v-card-title class="">{{item.name}}</v-card-title>
        <v-card-text>
          {{item.description}}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Activitie",
    methods: {
   ...mapActions(['fetchActivitie'])
 },
 
 computed: mapGetters(['allActivities']),
 created(){
   this.fetchActivitie()
 } 
};
</script>