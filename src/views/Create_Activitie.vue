<template>
  <v-container>
    <v-layout row wrap align-center>
      <v-flex xs12 md5>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="activitie.name"
            :counter="30"
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            type="number"
            v-model="activitie.price"
            :counter="10"
            :rules="priceRules"
            label="Precio"
            required
          ></v-text-field>
          <v-textarea
            v-model="activitie.description"
            :counter="200"
            :rules="descriptionRules"
            label="Descripción"
            required
          ></v-textarea>

          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
          ></v-select>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="¿Crear actividad?"
            required
          ></v-checkbox>

          <v-btn :disabled="!valid" color="success" @click="addActivitie">Crear actividad</v-btn>

          <v-btn color="error" @click="reset">Reset Form</v-btn>

          <v-btn color="warning" @click="resetValidation">Reset Validation BORRAR IMPORTE</v-btn>
        </v-form>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 md6>
        <v-sheet height="500">
          <v-calendar></v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
class Activitie {
  constructor(name, price, description) {
    (this.name = name), (this.price = price), (this.description = description);
  }
}

export default {
  data() {
    return {
      activitie: new Activitie(),
      valid: true,
      nombre: "",
      nameRules: [
        v => !!v || "Debe ingresar un nombre para la actividad",
        v =>
          (v && v.length <= 30) ||
          "El nombre de la actividad debe ser mas corto"
      ],
      precio: "",
      priceRules: [v => !!v || "Solo se admiten numeros"],
      description: "",
      descriptionRules: [
        v => !!v || "Debe ingresar una descripción",
        v =>
          (v && v.length <= 200) ||
          "La descripción no puede exceder de 200 caracteres"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
    };
  },
  methods: {
    addActivitie() {
      console.log(this.activitie);
      fetch('http://localhost:3000/activities',{
          method: 'POST', 
          body: JSON.stringify(this.activitie),
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then(data => console.log(data))
      
      this.reset()
      this.resetValidation()
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  }
};
</script>
<style>
</style>
