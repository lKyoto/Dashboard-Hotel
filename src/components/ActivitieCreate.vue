<template>
  <v-container>
    <!-- Seccion del formulario -->
    <v-layout row wrap align-center>
      <v-flex xs12 md4>
        <v-form 
        ref="form"
        v-model="valid"
        >
          <v-text-field
          v-model="activitie.name"
          :counter="30"
          label="Nombre"
          :rules="nameRules"
          required
          ></v-text-field>
          <v-text-field
          v-model="activitie.price"
          label="Precio"
          :rules="priceRules"
          required
          ></v-text-field>
          <v-textarea
          v-model="activitie.description"
          :counter="200"
          label="Descripción"
          :rules="descriptionRules"
          required
          ></v-textarea>
          <v-btn 
          :disabled="!valid"
          color="success"
          @click="POST_Activitie"
          >
          Crear actividad
          </v-btn>
           <v-btn 
          color="warning"
         @click="reset"
          >
          Borrar formulario
          </v-btn>
        </v-form>
      </v-flex>
      <!-- Seccion del calendario -->
      <v-spacer></v-spacer>
      <v-flex xs12 md7>
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
        valid: true,
        activitie: new Activitie(),
        nameRules: [
          v => !!v || 'Por favor ingrese un nombre para actividad',
          v => (v && v.length >= 5) || 'El nombre de la actividad es muy corto',
          v => (v && v.length <= 30) || 'El nombre de la actividad es muy grande'
        ],
        priceRules: [
          v => !!v || 'Por favor ingrese un precio',
          v => /^\d+$/.test(v) || 'Solo se admiten números positivos'
        ],
        descriptionRules: [
          v => !!v || 'Por favor ingrese una descripción',
          v => (v && v.length >= 10) || 'La descripción de la actividad es muy pequeña',
          v => (v && v.length <= 200) || 'La descripción de la actividad es muy grande'
        ]
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
         this.$refs.form.reset()
      },
       validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    }
}
</script>
