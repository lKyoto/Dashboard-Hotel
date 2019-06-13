<template>
  <v-container>
    <!-- Seccion del formulario -->
    <v-layout row wrap align-center>
      <v-flex xs12 md5>
        <v-form >
          <v-text-field
          v-model="activitie.name"
          ></v-text-field>
          <v-text-field
          v-model="activitie.price"

          ></v-text-field>
          <v-textarea
          v-model="activitie.description"

          ></v-textarea>
          <v-btn @click="POST_Activitie">enviar</v-btn>
        </v-form>
      </v-flex>
      <!-- Seccion del calendario -->
      <v-spacer></v-spacer>
      <v-flex xs12 md6>
        <v-sheet height="500">
          <v-calendar></v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
    <!-- Seccion de la tabla -->

  </v-container>
</template>

<script>

 class Activitie{
    constructor(name, price, description){
      this.name = name,
      this.price = price, 
      this.description = description
    }
  }
 
  export default {
    data(){
      return{
        activitie: new Activitie()
      }
    }, 
    methods: {
      POST_Activitie(){
        fetch('http://localhost:3000/activities', {
           method: 'POST',
           body: JSON.stringify(this.activitie),
           headers: {
            'Accept': 'application/json',
            'Content-Type' : 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => console.log(data))
      }
    }
}
</script>
