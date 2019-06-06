<template>
    <div>
        <h3>Ro</h3>
        <div>
            <div v-for="i in get_all_rooms" :key="i.id">
                {{i.name}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
    name: "Room",
    methods: {
        ...mapActions(['fetchAll'])
    },
    computed: mapGetters(["get_all_rooms"]),
    created(){
        this.fetchAll()
    }
}
</script>

<style>

</style>
