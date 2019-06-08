<template>
  <div>
    <h3>ROOM</h3>
    <div v-for="i in get_all_rooms" :key="i.id">
        {{i[1].name}}
        {{i[2].description}}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Room",
  methods: {
    ...mapActions(["fetchAll"])
  },
  computed: mapGetters(["get_all_rooms"]),
  created() {
    this.fetchAll();
  }
};
</script>

<style>
</style>